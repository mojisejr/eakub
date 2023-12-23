import Button from "../shared/button";
import TypingText from "../typing-text/text";
export default function HeroTitle() {
  const texts = [
    "Expert Advisory",
    "Indicators",
    "Smart Scripts",
    "Trading Rooms",
    "Dashboard",
    "Premium Tools",
    "Education",
  ];

  return (
    <div>
      <TypingText texts={texts} />
      {/* <h1 className="h1-primary">Expert Advisory</h1> */}
      <h2 className="h2-primary py-10">
        ซื้อขาย เครื่องมือที่ช่วย <br />
        การเทรดของท่านกับ <br />
        <span className="h3-primary">EAKUB</span>
      </h2>
      <Button title="สมัครใช้งานฟรี" />
    </div>
  );
}
