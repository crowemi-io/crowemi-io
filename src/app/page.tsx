import InfoPane, { InfoPaneConfig } from "./ui/info-pane";
import PageBanner from "./ui/page-banner";

export default function Page() {
  return (
    <div>
      <div className="bg-primary">
        <div className="mx-auto container text-center sm:pt-20 sm:pb-20 pt-10 pb-10">
          <div>
            <div className="sm:inline-block hidden text-6xl font-extrabold whitespace-nowrap text-white pb-5">
              <span className="pr-1 pl-1">welcome to</span><span className="bg-black pr-1 pl-1 italic">crowemi-io</span>
            </div>
            <div className="text-xl leading-loose text-white-50">
              A technology consulting firm providing technology services for web and data.
            </div>
          </div>
        </div>
      </div>

      <InfoPane infoPaneConfig={
        {
          imagePath: "rocket.svg",
          title: "Technology is rocket fuel for your business.",
          description: "In today's fast-paced digital world, staying ahead means leveraging the power of advanced technology. With our innovative solutions, your business will soar to new heights like never before. Say goodbye to outdated methods and hello to efficiency, productivity, and unprecedented growth.",
          isImageRight: false
        }
      } />

      <InfoPane infoPaneConfig={
        {
          imagePath: "freelancer.svg",
          title: "No technology staff?",
          description: "You don't need a team of tech gurus to propel your business forward in the digital age. Our tailored solutions make harnessing technology simple and accessible, regardless of your expertise level.",
          isImageRight: true
        }
      } />

    </div>
  );
}
