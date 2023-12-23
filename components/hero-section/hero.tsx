import HeroTitle from "./title";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-evenly pt-[100px] max-w-[1440px] gap-[100px]">
      <HeroTitle />
      <div className="relative w-[450px] h-[550px] object-contain">
        <Image src="/images/gardpict.png" fill alt="logo" />
      </div>
    </div>
  );
}
