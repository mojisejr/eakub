import { motion } from "framer-motion";
interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => {};
}
export default function Button({ title, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn  bg-primary text-[30px] text-[#404577] hover:bg-accent ${className} transition-all 1s`}
    >
      {title}
    </button>
  );
}
