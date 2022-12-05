terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.0"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}
