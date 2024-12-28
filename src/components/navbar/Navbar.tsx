import {
  IconBook2,
  IconDeviceLaptop,
  IconHeartHandshake,
  IconHome,
  IconMail,
  IconUserCircle,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About me",
      icon: (
        <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Experience",
      icon: (
        <IconBook2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Portfolio",
      icon: (
        <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Services",
      icon: (
        <IconHeartHandshake className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className=" w-max block z-20 fixed left-1/2 bottom-8  transform -translate-x-1/2">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
