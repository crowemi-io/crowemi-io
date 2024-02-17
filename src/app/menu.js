export default function Menu() {
    return (
        <div className="mx-auto bg-primary sticky border-b-stone-200 border-b">
            <div className="mx-auto font-medium text-white container flex flex-row">
                <div className="grow flex basis-3/4">
                    <button className="hover:border-b-stone-200 hover:border-b-2 border-b-primary border-b-4 p-5 text-lg"><a>home</a></button>
                    <button className="hover:border-b-stone-200 hover:border-b-2 border-b-primary border-b-4 p-5 text-lg"><a>services</a></button>
                    <button className="hover:border-b-stone-200 hover:border-b-2 border-b-primary border-b-4 p-5 text-lg"><a>contact</a></button>
                    <button className="hover:border-b-stone-200 hover:border-b-2 border-b-primary border-b-4 p-5 text-lg"><a>about us</a></button>
                </div>
                <div className="basis-1/4">
                    <button>button</button>
                </div>
            </div>
        </div>
    )
}