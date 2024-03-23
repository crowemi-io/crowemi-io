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

resource "google_cloud_run_service" "crowemi_io" {
    name     = local.service
    location = local.region

    template {
        spec {
            containers {
                image = "us-west1-docker.pkg.dev/${local.project}/crowemi-io/${local.service}:${var.docker_image_tag}"

                ports {
                    container_port = 3000
                }

                resources {
                    limits {
                        cpu    = "1000m"
                        memory = "512Mi"
                    }
                }
            }

            service_account_name = google_service_account.service_account.name
            max_instances        = 2
        }
    }

    traffic {
        percent         = 100
        latest_revision = true
    }

    autogenerate_revision_name = true
    delete_revision_on_update  = true
    allow_unauthenticated      = true
}

resource "google_cloud_run_domain_mapping" "crowemi_io" {
    location = "us-west1"
    name     = "io.crowemi.com"

    metadata {
        namespace = local.service
    }

    spec {
        route_name = google_cloud_run_v2_service.crowemi-io.name
    }
}