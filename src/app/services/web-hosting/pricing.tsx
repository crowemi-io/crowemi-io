import Pricing from "../../ui/pricing/pricing"

export default function PricingWebHosting() {
    return(
        <Pricing 
            title="web hosting" 
            tagline="" 
            pricingBlocks={
                [
                    {
                        title: "Basic",
                        tagline: "For small sites with low traffic",
                        price: 25,
                        pricePeriod: "month",
                        pricingFeatures: [
                            "48-hour support response time",
                        ]
                    },
                    {
                        title: "Standard",
                        tagline: "For midsize sites with medium traffic",
                        price: 50,
                        pricePeriod: "month",
                        pricingFeatures: [
                            "Web Server",
                            "Database Server",
                        ]
                    },
                    {
                        title: "Premium",
                        tagline: "For small businesses",
                        price: 100,
                        pricePeriod: "month",
                        pricingFeatures: [
                            "Web Server",
                            "Database Server",
                        ]
                    },
                ]
            } 
        />
    )
}