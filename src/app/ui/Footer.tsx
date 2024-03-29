import { LinkItem } from "./Menu"

interface Props {
    LinkItems: LinkItem[]
}

export default function Footer({ LinkItems }: Props) {
    return (
        <>
            <div  className="bg-primary p-10  text-white border-t border-t-bc">
                <div className="flex container mx-auto">
                    <div className="grow">
                        Copyrights © {new Date().getFullYear()} All Rights Reserved by <span className="bg-black pr-1 pl-1 italic">crowemi-io</span>
                    </div>
                    <div className="sm:inline hidden">
                        {
                            LinkItems.map((linkItem, idx) =>
                                <>
                                    <a href={linkItem.route} className="hover:underline">{linkItem.name}</a>
                                    {idx !== (LinkItems.length - 1) ? <span className="pr-2 pl-2">|</span> : null}
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
