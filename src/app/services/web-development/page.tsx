import FeatureSection, {Feature} from "../../ui/feature-section"
import PageBanner from "../../ui/page-banner"

const features: Feature[] = [
    {
        title: "Web Applications",
        description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
        icon: "push-to-deploy"
    },
    {
        title: "Web API",
        description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
        icon: "ssl-certificates"
    },
    {
        title: "Third-party integrations",
        description: "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
        icon: "simple-queues"
    }
]

export default function WebDevelopment() {
    return (
        <>
            <PageBanner title="web development" tagline="Unlock the potential of the digital realm with our expertly crafted web development solutions." />
            <div className="container mx-auto">
                <FeatureSection features={features} />
            </div>
        </>
    )
}