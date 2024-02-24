import InfoPane, { InfoPaneConfig } from "../../components/InfoPane"
import PageBanner from "../../components/PageBanner"


export default function Services() {
    return (
        <>
            <PageBanner title="services" tagline="unlock your business potential with our comprehensive web, and data soluations." />

            <InfoPane infoPaneConfig={
                {

                    imagePath: "web-dev.svg",
                    title: "Web Development",
                    description: "From sleek and responsive designs to powerful backend solutions, we offer a comprehensive range of web development services tailored to meet your unique needs. Whether you're launching a new website, optimizing an existing one, or integrating cutting-edge features, our team of experts is here to bring your vision to life. With a focus on quality, innovation, and customer satisfaction, we're committed to delivering results that exceed expectations.",
                    isImageRight: false
                }

            } />

            <InfoPane infoPaneConfig={
                {

                    imagePath: "web-hosting.svg",
                    title: "Web Hosting",
                    description: "Reliable, secure, and lightning-fast web hosting is essential for any successful online venture, and we've got you covered. Our cutting-edge web hosting services offer a seamless experience, ensuring your website is always accessible to your audience.",
                    isImageRight: true
                }

            } />

            <InfoPane infoPaneConfig={
                {

                    imagePath: "business-analysis-and-analytics.svg",
                    title: "Data Solutions",
                    description: "In today's dynamic business landscape, data is the lifeblood of innovation and growth. Our tailored data solutions are designed to help you navigate the complexities of modern data environments, unleashing the true potential of your information assets.",
                    isImageRight: false
                }

            } />
        </>
    )
}
