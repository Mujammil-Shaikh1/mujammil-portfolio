"use client";
import { useState } from "react";
import { Lens } from "../ui/lens";
import { motion } from "framer-motion";
import ContentHeader from "../common/section-header";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { IconChevronRight } from "@tabler/icons-react";
import Rays from "../common/rays";
import Beams from "../common/beams";

interface Project {
  id: number;
  image: string;
  title: string;
  techStack: string[];
  keyFeatures: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    image:
      "https://mujammil-shaikh.netlify.app/static/media/portfolio2.59dcbc02a4d11f98f834.png",
    title: "Movie Search App",
    techStack: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "React JS",
      "Redux",
      "API",
    ],
    keyFeatures: [
      "Movie listing",
      "Movie searching",
      "Movie description page",
      "React slider",
      "Routing",
      "Responsive designing",
      "Single page application",
    ],
    link: "https://filmy-studio.netlify.app/",
  },
  {
    id: 2,
    image:
      "https://mujammil-shaikh.netlify.app/static/media/portfolio5.70803c3a499014b2618d.png",
    title: "Food Delivery Website",
    techStack: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "jQuery", "AOS"],
    keyFeatures: [
      "Food listing",
      "Browse category and foods",
      "Static design",
      "Single Page Application",
      "Animation On Scroll",
      "Responsive designing",
    ],
    link: "https://foodie-cart.netlify.app/",
  },
  {
    id: 3,
    image:
      "https://mujammil-shaikh.netlify.app/static/media/portfolio4.f2e8f56ab2d86be070aa.png",
    title: "E-Learning Website",
    techStack: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "React JS",
      "AOS",
    ],
    keyFeatures: [
      "Course listing",
      "Static design",
      "Animation On Scroll",
      "Routing",
      "Responsive designing",
      "Single page application",
    ],
    link: "https://educrack.netlify.app/",
  },
  {
    id: 4,
    image:
      "https://mujammil-shaikh.netlify.app/static/media/portfolio3.fe3eda15174243e7f098.png",
    title: "Online Sports Shop",
    techStack: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "React JS",
      "AOS",
    ],
    keyFeatures: [
      "Product listing",
      "Static design",
      "Animation On Scroll",
      "Routing",
      "Responsive designing",
      "Single page application",
    ],
    link: "https://sports-track.netlify.app/",
  },
  {
    id: 5,
    image:
      "https://mujammil-shaikh.netlify.app/static/media/portfolio1.97c898528510d8a4db99.png",
    title: "Foodie Cart",
    techStack: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "React JS",
      "Redux",
      "API",
    ],
    keyFeatures: [
      "Food listing",
      "Food searching",
      "Food description page",
      "Add and Remove from cart",
      "Routing",
      "Responsive designing",
    ],
    link: "https://foodie-go.netlify.app/",
  },
  {
    id: 6,
    image:
      "https://mujammil-shaikh.netlify.app/static/media/Portfolio6.8bdfeda8b10bcee087c9.png",
    title: "Coffee Shop",
    techStack: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "jQuery", "AOS"],
    keyFeatures: [
      "Coffee listing",
      "Dark and light mode",
      "Informative website",
      "Static design",
      "Animation On Scroll",
      "Responsive designing",
    ],
    link: "https://coffee-way.netlify.com/",
  },
];

export default function Portfolio() {
  return (
    <div className="px-20">
      <ContentHeader title="Portfolio" subTitle="My Recent Work" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 w-full px-4 ">
        {projects.map((project: Project, index) => {
          return (
            <div key={index}>
              <PortfolioCard project={project} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div>
      <div className="w-full h-[520px] relative rounded-3xl overflow-hidden  bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 ">
        <Rays />
        <Beams />
        <div className="relative z-10">
          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              src={project?.image}
              alt="image"
              className="rounded-2xl w-full aspect-[16/9] object-cover !h-48"
            />
          </Lens>
          <motion.div
            animate={{
              filter: hovering ? "blur(2px)" : "blur(0px)",
            }}
            className="py-4 relative z-20"
          >
            <h2 className="text-white text-2xl text-left font-bold">
              {project.title}
            </h2>
            <p className="text-white text-md text-left mt-4 ">
              Tech Stack:{" "}
              <span className="text-sm text-neutral-300">
                {project?.techStack.join(", ")}
              </span>
            </p>
            <p className="text-white text-md text-left my-4 ">
              Key Features:{" "}
              <span className="text-sm text-neutral-300">
                {project?.keyFeatures.join(", ")}
              </span>
            </p>
            <HoverBorderGradient
              containerClassName="rounded-lg border-1 border-transparent bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-border w-[140px] h-[50px] "
              as="button"
              className="dark:bg-gray-900 w-[138px] h-[48px] justify-center bg-white text-black dark:text-white flex items-center space-x-2"
              onClick={() => {
                window.open(project?.link, "_blank");
              }}
            >
              <span className="flex items-center justify-around w-full">
                <span>Live Demo</span>{" "}
                <IconChevronRight className="w-5 h-5 mt-1" />
              </span>
            </HoverBorderGradient>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
