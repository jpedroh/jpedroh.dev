provider "cloudflare" {
  email   = var.cloudflare_email
  api_key = var.cloudflare_api_key
}

data "cloudflare_zone" "jpedroh_dev" {
  name = "jpedroh.dev"
}

resource "cloudflare_pages_project" "jpedroh_dev" {
  account_id        = data.cloudflare_zone.jpedroh_dev.account_id
  name              = "jpedroh-dev"
  production_branch = "main"

  source {
    type = "github"
    config {
      owner                         = "jpedroh"
      repo_name                     = "jpedroh.dev"
      production_branch             = "main"
      pr_comments_enabled           = true
      deployments_enabled           = true
      production_deployment_enabled = true
    }
  }

  build_config {
    build_command = "npx @cloudflare/next-on-pages@1"
    destination_dir = ".vercel/output/static"
  }

  deployment_configs {
    production {
      compatibility_flags = ["nodejs_compat"]
    }
    preview {
      compatibility_flags = ["nodejs_compat"]
    }
  }
}

resource "cloudflare_pages_domain" "jpedroh_dev" {
  account_id   = data.cloudflare_zone.jpedroh_dev.account_id
  project_name = cloudflare_pages_project.jpedroh_dev.name
  domain       = "jpedroh.dev"
}

resource "cloudflare_pages_domain" "www_jpedroh_dev" {
  account_id   = data.cloudflare_zone.jpedroh_dev.account_id
  project_name = cloudflare_pages_project.jpedroh_dev.name
  domain       = "www.jpedroh.dev"
}

resource "cloudflare_record" "jpedroh_dev" {
  zone_id = data.cloudflare_zone.jpedroh_dev.zone_id
  name    = "@"
  value   = cloudflare_pages_project.jpedroh_dev.subdomain
  type    = "CNAME"
  ttl     = 1
  proxied = true
}

resource "cloudflare_record" "www_jpedroh_dev" {
  zone_id = data.cloudflare_zone.jpedroh_dev.zone_id
  name    = "www"
  value   = cloudflare_pages_project.jpedroh_dev.subdomain
  type    = "CNAME"
  ttl     = 1
  proxied = true
}
