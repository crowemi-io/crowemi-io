type FeatureSection = {
    features: Feature[];
}

export type Feature = {
    title: string;
    description: string;
    icon: string;
}

export function FeatureBlock(feature: Feature) {
    return (
        <div className=" pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <img src={feature.icon} />
                </div>
                <div>
                    {feature.title}
                </div>
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
        </div>
    )
}

export default function FeatureSection({ features }: FeatureSection) {
    return (
        <div className="bg-white py-10 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto py-10 max-w-2xl lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature, index) => (
                            <FeatureBlock key={index} {...feature} />
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}