locals {
    region  = "us-west1"
    service = "crowemi-io"
    project = "crowemi-io-417402"
}
resource "google_service_account" "service_account" {
    account_id   = "srv-${local.service}"
    display_name = "srv_crowemi_io"
    description  = "A service account for ${local.service}"
}

resource "google_cloud_run_v2_service" "this" {
    name     = local.service
    location = "us-west1"
    ingress  = "INGRESS_TRAFFIC_ALL"

    template {
        containers {
            image = "us-west1-docker.pkg.dev/${local.project}/crowemi-io/${local.service}:${var.docker_image_tag}"
            startup_probe {
                initial_delay_seconds = 0
                timeout_seconds       = 1
                period_seconds        = 3
                failure_threshold     = 1
                tcp_socket {
                    port = 3000
                }
            }
            liveness_probe {
                http_get {
                    path = "/"
                }
            }
        }
        service_account = google_service_account.service_account.email
    }
}