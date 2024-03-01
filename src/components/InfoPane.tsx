"use client"
import { useRouter } from "next/navigation"

type Props = {
    infoPaneConfig: InfoPaneConfig
}

export type InfoPaneConfig = {
    imagePath: string,
    title: string,
    description: string,
    isImageRight: boolean,
    backgroundColor?: string,
    learnMore?: LearnMore
}

type LearnMore = {
    title: string,
    route: string
}

export default function InfoPane({ infoPaneConfig }: Props) {
    const router = useRouter()

    var ret = null;
    if (infoPaneConfig.isImageRight) {
        ret = (
            <div className="lg:flex p-20 items-center bg-blue-200">
                <div className="sm:basis-1/2 sm:p-20 lg:text-right text-center text-xl leading-loose grid place-content-center">
                    <img className="lg:hidden" src={infoPaneConfig.imagePath}></img>
                    <span className="text-4xl font-extrabold">{infoPaneConfig.title}</span>
                    <div className="text-gray-600 lg:text-right text-left pt-10">
                        {infoPaneConfig.description}
                    </div>
                    <div className="pt-10">
                    {infoPaneConfig.learnMore ? <button type="button" onClick={() => router.push(infoPaneConfig.learnMore ? infoPaneConfig.learnMore.route : "/")} className="p-10 rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-black">{infoPaneConfig.learnMore.title}</button> : null}
                    </div>
                </div>
                <div className="sm:basis-1/2">
                    <img className="lg:inline hidden" src={infoPaneConfig.imagePath}></img>
                </div>
            </div>
        )
    } else {
        ret = (
            <div className="lg:flex p-20 items-center">
                <div className="sm:basis-1/2">
                    <img src={infoPaneConfig.imagePath}></img>
                </div>
                <div className="sm:basis-1/2 sm:p-20 sm:text-left text-center text-xl leading-loose grid place-content-center">
                    <span className="text-4xl font-extrabold">{infoPaneConfig.title}</span>
                    <div className="text-gray-400 text-left pt-10">
                        {infoPaneConfig.description}
                    </div>
                    <div className="pt-10">
                    {infoPaneConfig.learnMore ? <button type="button" onClick={() => router.push(infoPaneConfig.learnMore ? infoPaneConfig.learnMore.route : "/")} className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 ">{infoPaneConfig.learnMore.title}</button> : null}
                    </div>
                </div>
            </div>
        )
    }
    return (
        ret
    )
}