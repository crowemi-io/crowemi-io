"use client"
import { ReactNode } from "react"
import { usePathname } from "next/navigation";

export interface MenuProps {
    linkItems: LinkItem[]
}

export interface LinkItem {
    id: number,
    name: string,
    route: string
}

function getClass(currentPath: string, route: string) {
    currentPath = `/${currentPath.split("/")[1]}`;
    if (currentPath == route) {
        return "border-b-stone-200 border-b-4 border-b-primary border-b-4 p-5 text-lg"
    } else {
        return "hover:border-b-stone-200 hover:border-b-4 border-b-primary border-b-4 p-5 text-lg"
    }
}

export default function Menu({ linkItems }: MenuProps) {
    const path = usePathname();
    return (
        <div className="mx-auto bg-primary sticky border-b border-b-bc border-b-opacity-50">
            <div className="mx-auto font-medium text-white container flex flex-row">
                <div className="grow flex basis-3/4">
                {
                    linkItems.map((linkItem) => 
                        <a key={linkItem.id.toString()} id={linkItem.id.toString()} href={linkItem.route} className={getClass(path, linkItem.route)}>{linkItem.name}</a>
                    )
                }
                </div>
            </div>
        </div>
    )
}