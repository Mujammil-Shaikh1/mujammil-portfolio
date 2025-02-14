// import { MujammilPic } from "../../assets";

import {
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";

const HeroImage = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="flex flex-col items-center gap-2 absolute left-20 top-1/2 -translate-y-1/2">
        <a href="#">
          <IconBrandLinkedin className="h-5 w-5 cursor-pointer text-[#4df0ff] dark:text-[#4df0ff]" />
        </a>
        <a href="#">
          <IconBrandWhatsapp className="h-5 w-5 cursor-pointer text-[#4df0ff] dark:text-[#4df0ff]" />
        </a>
        <a href="#">
          <IconMail className="h-5 w-5 cursor-pointer text-[#4df0ff] dark:text-[#4df0ff]" />
        </a>
        <div className="h-8 w-[1px] bg-[#4df0ff] dark:bg-[#4df0ff]" />
      </div>

      <div className="bg-gradient-to-b from-[#4df0ff] ml-4 to-transparent rounded-t-[12rem] h-[30rem] p-2 w-[22rem] flex items-center justify-center">
        {/* <img src={MujammilPic} alt="" className="block object-cover w-full" /> */}
      </div>

      <a
        href="#"
        className="text-[#4df0ff] rotate-90 absolute right-20 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        Scroll Down 🖱️
      </a>
    </div>
  );
};

export default HeroImage;
