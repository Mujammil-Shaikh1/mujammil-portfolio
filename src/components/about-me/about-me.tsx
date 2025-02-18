// import { MujammilPic } from "../../assets";
import { CardSpotlight } from "../ui/card-spotlight";
import { IconCertificate, IconCode, IconTerminal2 } from "@tabler/icons-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import ContentHeader from "../common/section-header";

interface cardConfigState {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}
const cardConfig = [
  {
    id: "experience",
    icon: <IconTerminal2 className="h-5 w-5 relative z-20 text-white" />,
    title: "Experience",
    description: "3.6+ Years Experience",
  },
  {
    id: "education",
    icon: <IconCertificate className="h-5 w-5 relative z-20 text-white" />,
    title: "Education",
    description: "MCA Engineering",
  },
  {
    id: "projects",
    icon: <IconCode className="h-5 w-5 relative z-20 text-white" />,
    title: "Projects",
    description: "3.6+ Years Experience",
  },
];

const AboutMe = () => {
  return (
    <div className="mt-18">
      <ContentHeader title="About Me" subTitle="Get To Know" />
      <div className="flex  items-center justify-center  h-[550px] px-20">
        <div className="w-full h-full flex items-center justify-center">
          {/* <div className=" w-[55%] bg-cyan-900 aspect-square bg-gradient-to-r from-transparent via-[#4df0ff] to-transparent rounded-2xl grid place-items-center">
            <div className="rounded-2xl overflow-hidden rotate-[10deg] transition-all duration-500 ease-in-out hover:rotate-0">
              <img
                src={MujammilPic}
                alt=""
                className="block w-full object-cover bg-[#36096d] bg-gradient-to-br from-[#36096d] to-[#37d5d6] via-[#37d5d6]/[74%]"
              />
            </div>
          </div> */}
        </div>
        <div className="w-full h-full flex flex-col gap-10  items-center justify-center">
          <div className="flex gap-10 ">
            {cardConfig.map((card: cardConfigState) => {
              return (
                <CardSpotlight
                  key={card.id}
                  className="w-[200px] h-36 flex flex-col justify-around items-center"
                >
                  {card.icon}
                  <p className="text-xl font-bold relative z-20  text-white">
                    {card.title}
                  </p>

                  <p className="text-neutral-300  relative z-20 text-xs">
                    {card.description}
                  </p>
                </CardSpotlight>
              );
            })}
          </div>
          <div className="flex flex-col gap-5 ">
            <p className="text-justify text-neutral-200 text-base  leading-7">
              HI, I'm Mujammil Shaikh, Courteous and enthusiastic person,I am
              interested in IT and everything in its orbit 👨‍🚀. I recently began
              to be fascinated by web programming. E.g. Developing React apps
              and building websites 🖥️.I started my career as a Full Stack Web
              Developer in a a2z infotech,I gained experience of working in this
              area. As this area complements this studies ,I am keen to gain
              more experience in the field for a company to offer me a placement
              among their developers. In return I would offer my full commitment
              and be pleasant and friendly addition to your team, I am currently
              looking for a job as React Developer. 👨‍💻
            </p>
            <HoverBorderGradient
              containerClassName="rounded-lg border-1 border-transparent bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-border w-[130px] h-[50px] "
              as="button"
              className="dark:bg-black w-[128px] h-[48px] justify-center bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Contact Me</span>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
