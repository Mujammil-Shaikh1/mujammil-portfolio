import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

interface RatingProps {
  rating: number;
}
const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <IconStarFilled
          key={`full-${i}`}
          className="w-4 h-4 text-neutral-200"
        />
      );
    }

    if (halfStars) {
      stars.push(
        <IconStarHalfFilled key="half" className="w-4 h-4 text-neutral-200 " />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <IconStar key={`empty-${i}`} className="w-4 h-4 text-neutral-200" />
      );
    }

    return stars;
  };

  return <div className="flex gap-1 ">{renderStars()}</div>;
};

export default Rating;
