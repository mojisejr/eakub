import { FaStar } from "react-icons/fa";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className="flex gap-1">
      <FaStar className={`${rating >= 1 ? "text-yellow-500" : null}`} />
      <FaStar className={`${rating >= 2 ? "text-yellow-500" : null}`} />
      <FaStar className={`${rating >= 3 ? "text-yellow-500" : null}`} />
      <FaStar className={`${rating >= 4 ? "text-yellow-500" : null}`} />
      <FaStar className={`${rating >= 5 ? "text-yellow-500" : null}`} />
    </div>
  );
}
