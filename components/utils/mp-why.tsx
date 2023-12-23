export default function Why() {
  const contents = [
    "ชื้อง่าย ขายคล่อง",
    "มีครบจบในที่เดียว",
    "ค่าธรรมเนียมต่ำ",
    "รับรองคุณภาพ",
    "ง่ายและสะดวก",
    "บริการ 24 ชั่วโมง",
  ];
  return (
    <div className="flex justify-center pt-[300px]">
      <div className="text-white">
        <div className="text-[40px] font-semibold text-center">
          ทำไมต้องเรา <span className="text-primary font-semibold">EAKUB</span>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-5">
          {contents.map((content, index) => (
            <div className="text-[40px]" key={index}>
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
