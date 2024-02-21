const services = [
    { name: "web hosting", icon: "" },
    {
        name: "web development",
        icon: '<i class="fa-solid fa-globe fa-2x"></i>',
        description: "some text about web development",
    },
];

function getServices() {
    return services.map((service) => (
        <div className="flex flex-row">
            <div className="pr-5">{service.icon}</div>
            <div className="text-left font-medium text-lg">{service.name}</div>
        </div>
    ));
}

export default function Services() {
    return (
        <div className="bg-white">
            <div className="mx-auto container">
                <div>
                    <div id="services" className="text-center">
                        <div className="sm:inline-block hidden text-6xl font-extrabold whitespace-nowrap pt-20">
                            services
                        </div>
                        <div className="pb-5">
                            <div className="text-xl leading-loose text-gray-400">
                                <span>
                                    unlock your business potential with our comprehensive web,
                                    data, and buiness process services
                                </span>
                                {getServices()}
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 pb-20 sm:grid sm:grid-rows-3 sm:grid-flow-col gap-4">
                        <div className="flex flex-row">
                            <div className="pr-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                                    />
                                </svg>
                            </div>
                            <div className="text-left font-medium text-lg">web hosting</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="pr-5">
                                <i className="fa-solid fa-globe fa-2x"></i>
                            </div>
                            <div className="text-left font-medium text-lg">
                                web development
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <div className="pr-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                        />
                                    </svg>
                                </div>
                                <div className="text-left font-medium text-lg">
                                    web integration
                                </div>
                            </div>
                            some text about web integrations
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}