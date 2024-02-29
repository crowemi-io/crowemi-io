import Pricing from "../../../components/pricing/Pricing"

export default function PricingWebHosting() {
    return(
        <Pricing 
            title="web hosting" 
            tagline="" 
            pricingBlocks={
                [
                    {
                        title: "Basic",
                        tagline: "For small businesses",
                        price: 25,
                        pricePeriod: "month",
                        pricingFeatures: [
                            "48-hour support response time",
                        ]
                    },
                    {
                        title: "Basic",
                        tagline: "For small businesses",
                        price: 50,
                        pricePeriod: "month",
                        pricingFeatures: [
                            "48-hour support response time",
                        ]
                    },
                    {
                        title: "Basic",
                        tagline: "For small businesses",
                        price: 100,
                        pricePeriod: "month",
                        pricingFeatures: [
                            "48-hour support response time",
                        ]
                    },
                ]
            } 
        />
    )
}