import SummaryCard from "./summary-cart";
import WithdrawForm from "./withdraw-form";
import WithdrawTable from "./withdraw-table";

export default function Account() {
  return (
    <div className="flex flex-col py-10 gap-6">
      <div className="flex justify-center">
        <SummaryCard />
      </div>
      <div className="grid grid-cols-2">
        <div className="p-3">
          <div className="text-[35px] font-semibold">ขอเบิก</div>
          <WithdrawForm />
        </div>
        <div className="p-3">
          <WithdrawTable />
        </div>
      </div>
    </div>
  );
}
