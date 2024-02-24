type Props = {
    title: string,
    tagline: string
}

export default function PageBanner({ title, tagline }: Props) {
    return (
        <>
            <div className="bg-primary">
                <div className="mx-auto container text-center sm:pt-20 sm:pb-20 pt-10 pb-10">
                    <div>
                        <div className="sm:inline-block hidden text-6xl font-extrabold whitespace-nowrap text-white pb-5">
                            {title}
                        </div>
                        <div className="text-xl leading-loose text-white-50">
                            {tagline}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}