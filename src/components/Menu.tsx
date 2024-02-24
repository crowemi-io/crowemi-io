export interface MenuProps {
    linkItems: LinkItem[],
}

export interface LinkItem {
    name: string,
    route: string
}

export default function Menu({ linkItems }: MenuProps) {
    return (
        <div className="mx-auto bg-primary sticky border-b border-b-bc border-b-opacity-50">
            <div className="mx-auto font-medium text-white container flex flex-row">
                <div className="grow flex basis-3/4">
                {
                    linkItems.map((linkItem) => 
                        <a href={linkItem.route} className="hover:border-b-white hover:border-b-4 border-b-4 border-b-primary p-5 text-lg">{linkItem.name}</a>
                    )
                }
                </div>
                {/* <div className="flex basis-1/4">
                    <div className="flex grow"></div>
                    <a href="/" className="hover:border-b-stone-200 hover:border-b-2 border-b-primary border-b-4 p-5 text-lg">login</a>
                    <a href="/" className="hover:border-b-stone-200 hover:border-b-2 border-b-primary border-b-4 p-5 text-lg">signup</a>
                </div> */}
            </div>
        </div>
    )
}