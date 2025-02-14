import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import Rating from "./rating";

interface Technologies {
  name: string;
  rating: number;
}

interface ExperienceCardProps {
  technologies: Technologies[];
  title: string;
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  technologies,
  title,
}) => {
  return (
    <div className="h-[40rem] rounded-3xl gap-10 bg-black flex flex-col items-center  relative w-[480px] p-7 my-10 border border-[#262626] hover:border-[#4b4b4b]">
      <h1 className="text-neutral-200 text-2xl">{title}</h1>
      <div className="grid grid-cols-2 w-full gap-9">
        {technologies.map((tech: Technologies) => (
          <TechnologyRating
            key={tech.name}
            name={tech.name}
            rating={tech.rating}
          />
        ))}
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default ExperienceCard;

const TechnologyRating: React.FC<Technologies> = ({ name, rating }) => {
  return (
    <div className="w-full flex gap-3 items-start justify-start">
      <div>
        <IconRosetteDiscountCheckFilled className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />
      </div>
      <div className="w-full">
        <h6 className="text-white text-md mb-2">{name}</h6>
        <Rating rating={rating} />
      </div>
    </div>
  );
};
