import Image from "next/image";
export default function Navbar() {
  return (
    <div className="sticky navbar w-full h-[60px] bg-base-100 border-b-[1px] border-white border-opacity-30 px-10">
      <div className="navbar-start">
        <div className="relative w-[200px] h-[45px]">
          <Image src="/images/logo.png" fill alt="logo" />
        </div>
      </div>
      <div className="navbar-end">Sign In</div>
    </div>
  );
}
