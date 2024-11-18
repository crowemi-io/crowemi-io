import PageBanner from "../ui/PageBanner"
import Pricing from "../ui/pricing/Pricing"
import PricingWebHosting from "../services/web-hosting/pricing"

import type { Metadata } from 'next'

const TAGLINE: string = "clear and transparent pricing to build and maintain the technology needed to run your business."
const TITLE: string = "pricing"
export const metadata: Metadata = {
    title: TITLE,
    description: TAGLINE,
}
export default function WebDevelopment() {
    return (
        <>
            <PageBanner title={TITLE} tagline={TAGLINE} />
            <div className="container mx-auto">
            <Pricing
                title="contracting services"
                tagline="custom efforts, enhancements, on-going support, and maintenance -- we offer a variety of contracting services to fit your needs."
                pricingBlocks={
                    [
                        {
                            title: "Basic",
                            tagline: "For small businesses",
                            price: 100,
                            pricePeriod: "hour",
                            pricingFeatures: [
                                "48-hour support response time",
                            ]
                        },
                        {
                            title: "Standard",
                            tagline: "For medium businesses",
                            price: 175,
                            pricePeriod: "hour",
                            pricingFeatures: [
                                "24-hour support response time",
                            ]
                        },
                        {
                            title: "Premium",
                            tagline: "For large businesses",
                            price: 250,
                            pricePeriod: "hour",
                            pricingFeatures: [
                                "1-hour, dedicated support response time",
                            ]
                        }
                    ]
                }
            />
            </div>
        </>
    )
}