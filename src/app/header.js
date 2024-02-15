export default function Headers() {
    return (
        <div className="mx-auto bg-primary border-b border-b-stone-100">
            <div className="mx-auto container p-2">
                <div className="flex p-5">
                    <div className="grow text-white">
                        <div className="text-center sm:text-left text-5xl">
                            Logo
                        </div>
                    </div>
                    <div className="hidden sm:inline">
                        <div className="flex flex-row text-white">
                            <div className="basis-1/2 pr-5 text-nowrap">
                                <div className="flex flex-row border-r border-red-100 pr-5">
                                    <div className="basis-1/4 pr-2">
                                        <div className="mx-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="basis-3/4">
                                        <div className="text-slate-400">Phone:</div>
                                        <div className="font-medium">541-220-8480</div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/2 text-nowrap">
                                <div className="flex flex-row">
                                    <div className="basis-1/4 pr-2">
                                        <div className="mx-auto text-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="basis-3/4">
                                        <div className="text-slate-400">Email:</div>
                                        <div className="font-medium">hello@crowemi.com</div>
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