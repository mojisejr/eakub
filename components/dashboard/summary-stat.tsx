interface SummaryStatProps {
  title: string;
  content: string;
  size: "sm" | "lg";
}

export default function SummaryStat({
  title,
  content,
  size,
}: SummaryStatProps) {
  return (
    <div>
      <div className={`text-[${size == "sm" ? "20px" : "30px"}] font-semibold`}>
        {title}
      </div>
      <div className={`text-[${size == "sm" ? "18px" : "25px"}] font-semibold`}>
        {content}
      </div>
    </div>
  );
}
