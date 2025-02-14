import ExperienceCard from "../common/experience-card";
import ContentHeader from "../common/section-header";
const frontendTech = [
  { name: "HTML 5", rating: 4.5 },
  { name: "CSS 3", rating: 4.0 },
  { name: "JavaScript", rating: 4 },
  { name: "TypeScript", rating: 4 },
  { name: "React JS", rating: 4 },
  { name: "Tailwind Css", rating: 4.0 },
  { name: "Redux", rating: 4.0 },
  { name: "Bootstrap 5", rating: 4 },
  { name: "Material UI", rating: 4.5 },
  { name: "Ant Design", rating: 3 },
  { name: "Redux Toolkit", rating: 3.5 },
  { name: "Jquery", rating: 5 },
];

const backendTech = [
  { name: "Node JS", rating: 4.5 },
  { name: "Express JS", rating: 4.5 },
  { name: "EJS", rating: 3.5 },
  { name: "REST API", rating: 4.5 },
  { name: "MySQL", rating: 4 },
  { name: "DBMS", rating: 4.0 },
  { name: "MongoDB", rating: 4 },
  { name: "Mongoose", rating: 4 },
  { name: "NPM", rating: 4.5 },
];

const MyExperience = () => {
  return (
    <div>
      <ContentHeader title="My Experience" subTitle="What Skill I Have" />
      <div className="flex  gap-16 justify-center items-center ">
        <ExperienceCard
          technologies={frontendTech}
          title="Frontend Development"
        />
        <ExperienceCard
          technologies={backendTech}
          title="Backend Development"
        />
      </div>
    </div>
  );
};

export default MyExperience;
