import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function MainPageFooter() {
  return (
    <footer className="footer p-10 bg-base-100 text-neutral-content border-t-[1px]">
      <nav>
        <img src="/images/logo.png" className="w-48" />
        <a className="link link-hover">&copy;EAKUB.io</a>
      </nav>
      <nav className="max-w-[150px]">
        <p className="text-[18px] leading-snug">
          การลงทุนมีความเสี่ยง กรุณาศึกษาเอกสารความเสี่ยง แบบเต็มได้
          <a className="link link-hover text-red-300"> ที่นี้</a>
        </p>
      </nav>
      <nav>
        <header className="footer-title">รู้จักเรา</header>
        <a className="link link-hover">นโยบายความเป็นส่วนตัว</a>
        <a className="link link-hover">
          การปฎิเสธความรับผิดชอบต่อความเสี่ยงทั่วไป
        </a>
      </nav>
      <nav>
        <header className="footer-title">ข้อตกลงและเงื่อนไข</header>
        <a className="link link-hover">สัญญาอนุญาติให้ใช้สิทธิ</a>
        <a className="link link-hover">หลักเกณฑ์สำหรับชุมชน</a>
      </nav>
      <nav>
        <a className="link link-hover">
          <BsTwitterX size={24} />
        </a>
        <a className="link link-hover">
          <MdEmail size={24} />
        </a>
      </nav>
    </footer>
  );
}
