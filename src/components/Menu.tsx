import { ReactNode } from "react";

export interface MenuProps {
    linkItems: LinkItem[],
}

export interface LinkItem {
    name: string,
    route: string
}

export default function Menu({ linkItems }: MenuProps) {
    return (
        <div className="mx-auto bg-primary sticky border-b-stone-200 border-b">
            <div className="mx-auto font-medium text-white container flex flex-row">
                <div className="grow flex basis-3/4">
                {
                    linkItems.map((linkItem) => 
                        <a href={linkItem.route} className="hover:border-b-stone-200 hover:border-b-2 border-b-primary border-b-4 p-5 text-lg">{linkItem.name}</a>
                )}
                </div>
                <div className="flex basis-1/4">
                    <div className="flex grow"></div>
                    <a href="/" className="hover:border-b-stone-200 hover:border-b-2 border-b-primary border-b-4 p-5 text-lg">login</a>
                    <a href="/" className="hover:border-b-stone-200 hover:border-b-2 border-b-primary border-b-4 p-5 text-lg">signup</a>
                </div>
            </div>
        </div>
    )
}