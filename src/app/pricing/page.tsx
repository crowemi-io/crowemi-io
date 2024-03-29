import PageBanner from "../ui/PageBanner"
import Pricing from "../ui/pricing/Pricing"
import PricingWebHosting from "../services/web-hosting/pricing"

export default function WebDevelopment() {
    return (
        <>
            <PageBanner title="pricing" tagline="clear and transparent pricing to build and maintain the technoloy needed to run your business." />
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