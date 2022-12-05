provider "vercel" {
  api_token = var.vercel_api_token
}

resource "vercel_project" "jpedroh" {
  name      = "jpedroh-dev"
  framework = "nextjs"
  git_repository = {
    production_branch = "main"
    repo              = "jpedroh/jpedroh.dev"
    type              = "github"
  }
}

resource "vercel_project_domain" "domain" {
  project_id = vercel_project.jpedroh.id
  domain     = "www.jpedroh.dev"
}

resource "vercel_project_domain" "domain_redirect" {
  project_id           = vercel_project.jpedroh.id
  domain               = "jpedroh.dev"
  redirect             = vercel_project_domain.domain.domain
  redirect_status_code = 308
}
