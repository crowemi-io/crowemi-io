import { LinkItem } from "./Menu"

interface Props {
    LinkItems: LinkItem[]
}

export default function Footer({ LinkItems }: Props) {
    return (
        <div className="bg-primary p-10  text-white">
            <div className="container mx-auto pt-10 pb-10">
                <div className="grid grid-cols-2">
                    <div >
                        <div className="text-5xl font-extrabold">Ready to elevate your business?</div>
                        <div>we're here to help</div>
                    </div>
                    <div className="text-right">2</div>

                </div>
            </div>
            <div className="flex container mx-auto pt-10 pb-10 font-thin">
                <div className="grow">
                    Copyrights © {new Date().getFullYear()} All Rights Reserved by <span className="bg-secondary pr-1 pl-1 italic">crowemi-io</span>
                </div>
                <div>
                    {
                        LinkItems.map((linkItem, idx) =>
                            <>
                                <a href={linkItem.route} className="hover:underline">{linkItem.name}</a>
                                {idx !== (LinkItems.length - 1) ? <span className="pr-2 pl-2">/</span> : null}
                            </>
                        )
                    }
                </div>
            </div>

        </div>
    )
}
