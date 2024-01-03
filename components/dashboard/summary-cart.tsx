import SummaryStat from "./summary-stat";

export default function SummaryCard() {
  return (
    <div className="max-w-xl my-bg-1 flex p-6 rounded-xl shadow-xl gap-10 items-center">
      <div className="flex flex-col gap-4">
        <SummaryStat title="รายรับเดือนนี้" content="xxxx" size="sm" />
        <SummaryStat title="รายรับทั้งหมด" content="xxxx" size="sm" />
      </div>
      <div>
        <SummaryStat title="ยอดคงเหลือเบิกได้" content="xxxx" size="lg" />
      </div>
    </div>
  );
}
