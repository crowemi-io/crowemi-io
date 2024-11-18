
type Service = {
    name: string
    icon: string
    description: string
}

export default function Service({ name, icon, description }: Service) {
    return (
        <div className="flex items-center">
            <img src={icon} alt={name} className="h-12 w-12" />
            <div className="p-5">
                <div className="font-extrabold text-3xl ">{name}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}