import PageBanner from "../../components/PageBanner"
import Pricing from "../../components/pricing/Pricing"
import PricingWebHosting from "../services/web-hosting/pricing"

export default function WebDevelopment() {
    return (
        <>
            <PageBanner title="pricing" tagline=" transparent pricing to build and maintain the technoloy you need to run a successful business." />
            <Pricing
                title="contracting services"
                tagline="custom efforts, enhancements, on-going support and maintenance; we offer a variety of contracting services to fit your needs."
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
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
            </div>
            <PricingWebHosting />
        </>
    )
}