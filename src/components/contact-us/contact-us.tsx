import ContentHeader from "../common/section-header";
import { CardSpotlight } from "../ui/card-spotlight";
import {
  IconBrandWhatsapp,
  IconChevronRight,
  IconMail,
} from "@tabler/icons-react";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { Textarea } from "../ui/textarea";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

interface cardConfigState {
  id: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}
const cardConfig = [
  {
    id: "email",
    icon: <IconMail className="h-7 w-7 relative z-20 text-blue-600" />,
    title: "Email",
    subTitle: "shaikhmujammil409@gmail.com",
  },
  {
    id: "whatsapp",
    icon: (
      <IconBrandWhatsapp className="h-7 w-7 relative z-20 text-green-500" />
    ),
    title: "Whatsapp",
    subTitle: "+91 8421202267",
  },
];

const ContactUs = () => {
  return (
    <div className="px-20">
      <ContentHeader title="Contact Us" subTitle="Get In Touch" />
      <div className="w-full h-auto grid grid-cols-[40%_60%] my-10">
        <div className=" flex flex-col gap-10 justify-center items-center">
          {cardConfig.map((card: cardConfigState) => {
            return (
              <CardSpotlight
                key={card.id}
                className="w-[350px] h-44 flex justify-around flex-col  items-center"
              >
                {card.icon}
                <div className="flex justify-center flex-col items-center gap-[4px]">
                  <p className="text-lg relative z-20  text-neutral-200">
                    {card.title}
                  </p>

                  <p className="text-neutral-200  relative z-20 text-sm">
                    {card.subTitle}
                  </p>
                </div>
                <div className="text-cyan-500 text-sm z-20 flex  justify-center items-center cursor-pointer hover:text-cyan-300">
                  Send message
                  <IconChevronRight className="w-5 h-5 mt-1" />
                </div>
              </CardSpotlight>
            );
          })}
        </div>
        <div className="px-10">
          <form
            className="flex flex-col gap-7 items-start justify-center h-full w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <LabelInputContainer>
              <Input
                className="h-12"
                id="firstname"
                placeholder="Your Full Name"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Input
                className="h-12"
                id="email"
                placeholder="Your Email Address"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Textarea id="message" placeholder="Type your message here..." />
            </LabelInputContainer>
            <HoverBorderGradient
              containerClassName="rounded-lg border-1 border-transparent bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-border w-[180px] h-[50px] "
              as="button"
              className="dark:bg-black w-[178px] h-[48px] justify-center bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span className="flex items-center justify-around w-full">
                <span>Send Message</span>{" "}
                <IconChevronRight className="w-5 h-5 mt-1" />
              </span>
            </HoverBorderGradient>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
