/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import ContentHeader from "../common/section-header";
import { animate, motion } from "framer-motion";
import { useEffect } from "react";
import { cn } from "../../lib/utils";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandRedux,
  IconBrandBootstrap,
  IconBrandTailwind,
  IconBrandMysql,
  IconBrandMongodb,
} from "@tabler/icons-react";

interface TechData {
  id: string;
  type: "icon" | "img";
  name: string;
  Icon?: any;
  color?: string;
  src?: string;
}

const techData: TechData[] = [
  {
    id: "1",
    type: "icon",
    name: "HTML5",
    Icon: IconBrandHtml5,
    color: "text-orange-600",
  },
  {
    id: "2",
    type: "icon",
    name: "CSS3",
    Icon: IconBrandCss3,
    color: "text-blue-500",
  },
  {
    id: "3",
    type: "icon",
    name: "JavaScript",
    Icon: IconBrandJavascript,
    color: "text-yellow-500",
  },

  {
    id: "4",
    type: "icon",
    name: "React",
    Icon: IconBrandReact,
    color: "text-cyan-500",
  },
  {
    id: "5",
    type: "icon",
    name: "TypeScript",
    Icon: IconBrandTypescript,
    color: "text-blue-500",
  },
  {
    id: "6",
    type: "icon",
    name: "Redux",
    Icon: IconBrandRedux,
    color: "text-violet-500",
  },
  {
    id: "7",
    type: "icon",
    name: "Tailwind CSS",
    Icon: IconBrandTailwind,
    color: "text-teal-400",
  },
  {
    id: "9",
    type: "icon",
    name: "Bootstrap",
    Icon: IconBrandBootstrap,
    color: "text-indigo-600",
  },

  {
    id: "10",
    type: "img",
    name: "Ant Design",
    src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  },
  {
    id: "11",
    type: "img",
    name: "AJAX",
    src: "https://www.json.org/img/json160.gif",
  },

  {
    id: "12",
    type: "icon",
    name: "Node.js",
    Icon: IconBrandNodejs,
    color: "text-green-600",
  },

  {
    id: "13",
    type: "icon",
    name: "MySQL",
    Icon: IconBrandMysql,
    color: "text-blue-900",
  },
  {
    id: "14",
    type: "icon",
    name: "MongoDB",
    Icon: IconBrandMongodb,
    color: "text-green-500",
  },
];

const Technologies = () => {
  return (
    <div className="h-96">
      <ContentHeader title="Technologies" subTitle="Experience In" />
      <Skeleton />
    </div>
  );
};

export default Technologies;

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
          shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className
      )}
    >
      {children}
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = techData.map((_, index) => [
    `.circle-${index + 1}`,
    { scale, transform },
    { duration: 0.8 },
  ]);

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-[250px] relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        {techData.map((tech, index) => (
          <Container key={tech.id} className={`h-16 w-16 circle-${index + 1}`}>
            {tech.type === "icon" && (
              <tech.Icon className={`h-8 w-8 ${tech.color}`} />
            )}

            {tech.type === "img" && (
              <img src={tech.src} className="h-8 w-8" alt={tech.name} />
            )}
          </Container>
        ))}
      </div>

      <div className="h-40 w-px absolute top-10 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
