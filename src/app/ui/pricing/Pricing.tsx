type Pricing = {
    title: string,
    tagline: string,
    pricingBlocks: PricingBlock[]
}

type PricingBlock = {
    title: string,
    tagline: string,
    price: number,
    pricePeriod: string,
    priceAnnual?: string,
    pricingFeatures?: string[]
}

function getPricingFeature(pricingFeature: string) {
    return (
        <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            {pricingFeature}
        </li>
    )
}

function getPricingBlock(pricingBlock: PricingBlock) {
    return (
        <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
            <h3 id="tier-basic" className="text-base font-semibold leading-7 text-gray-900">{pricingBlock.title}</h3>
            <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-5xl font-bold tracking-tight text-gray-900">${pricingBlock.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-400">/{pricingBlock.pricePeriod}</span>
            </p>
            {pricingBlock.priceAnnual ? <p className="mt-3 text-sm leading-6 text-gray-500">${pricingBlock.priceAnnual} per month if paid annually</p> : null}
            <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">{pricingBlock.tagline}</p>

            <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                {pricingBlock.pricingFeatures ? pricingBlock.pricingFeatures.map((feature) => getPricingFeature(feature)) : null}
            </ul>
        </div>
    )
}

export default function Pricing({ title, tagline, pricingBlocks }: Pricing) {
    return (
        <>
            <div className="bg-white py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl sm:text-center">
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{title}</p>
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400 sm:text-center">{tagline}</p>
                    <div className="mt-20 flow-root">
                        <div className="-mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
                            {pricingBlocks.map((pricingBlock) => getPricingBlock(pricingBlock))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}