import { Email, Phone } from "./Common";

export default function Headers() {
    return (
        <div className="mx-auto bg-primary border-b border-b-bc">
            <div className="mx-auto container p-2">
                <div className="flex py-5">
                    <div className="grow text-white">
                        <div className="text-center sm:flex sm:flex-row sm:mx-auto">
                            <div className="flex justify-center items-center pr-2">
                                <img className="sm:w-16 w-24" src="logo.svg"></img>
                            </div>
                            <div className="font-extrabold text-5xl text-nowrap">
                                crowemi-io
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:inline">
                        <div className="flex flex-row text-white">
                            <div className="basis-1/2 pr-5 text-nowrap">
                                <div className="flex flex-row border-r border-r-bc pr-5">
                                    <div className="basis-1/4 pr-2 grid place-content-center">
                                        <div className="mx-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="basis-3/4">
                                        <div className="text-gray-300">phone:</div>
                                        <div className="font-bold"><a href={Phone.href}>{Phone.display}</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/2 text-nowrap">
                                <div className="flex flex-row">
                                    <div className="basis-1/4 pr-2 grid place-content-center">
                                        <div className="mx-auto text-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="basis-3/4">
                                        <div className="text-gray-300">email:</div>
                                        <div className="font-bold"><a href="mailto:{ Email }">{ Email }</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}