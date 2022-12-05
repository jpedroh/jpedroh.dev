provider "cloudflare" {
  email     = var.cloudflare_email
  api_key   = var.cloudflare_api_key
}

data "cloudflare_zone" "this" {
  name = "jpedroh.dev"
}

resource "cloudflare_record" "vercel_cname" {
  zone_id = data.cloudflare_zone.this.id
  name    = "www"
  value   = "cname.vercel-dns.com"
  type    = "CNAME"
  proxied = false
}

resource "cloudflare_record" "vercel_a" {
  zone_id = data.cloudflare_zone.this.id
  name    = "@"
  value   = "76.76.21.21"
  type    = "A"
  proxied = false
}
