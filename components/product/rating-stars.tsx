import { FaStar } from "react-icons/fa";

export default function RatingStars() {
  return (
    <div className="flex gap-1">
      <FaStar className="text-yellow-500" />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
  );
}
