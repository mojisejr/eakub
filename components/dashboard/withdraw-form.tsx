export default function WithdrawForm() {
  return (
    <form className="grid grid-cols-1 gap-2">
      <div className="form-control">
        <label className="label">USDT Wallet address</label>
        <input
          className="input max-w-md input-bordered bg-white text-black"
          type="text"
        ></input>
        <label className="label">
          แนะนำให้เป็น wallet address ของ BNB Smart Chain
        </label>
      </div>
      <div className="form-control">
        <label className="label">จำนวนเงินที่ต้องการถอน</label>
        <input
          className="input max-w-md input-bordered bg-white text-black"
          type="number"
          min={50}
        ></input>
        <label className="label">ขึ้นต่ำ 50$ ค่าธรรมเนียม 10$</label>
      </div>
      <div className="form-control">
        <div className="flex gap-4 items-center">
          ยอดเงินที่จะได้{" "}
          <span className="text-primary font-bold text-[30px]">$40</span>
        </div>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox" />
          <span className="label-text">ยอมรับข้อตกลง</span>
        </label>
      </div>

      <button className="btn btn-primary text-[20px] font-semibold">
        ร้องขอ
      </button>
    </form>
  );
}
