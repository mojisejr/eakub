import { FaCheck } from "react-icons/fa";

export default function VerifiedBadge() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <FaCheck className="text-primary" />
      <span className="text-primary font-semibold">Verified</span>
    </div>
  );
}
