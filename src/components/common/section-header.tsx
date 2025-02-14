import { Cover } from "../ui/cover";

interface ContentHeaderProps {
  title: string;
  subTitle: string;
}
const ContentHeader: React.FC<ContentHeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="text-neutral-200 text-md">{subTitle}</div>
      <h6 className="text-5xl md:text-5xl lg:text-5xl font-semibold max-w-5xltext-center relative z-20  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>{title}</Cover>
      </h6>
    </div>
  );
};

export default ContentHeader;
