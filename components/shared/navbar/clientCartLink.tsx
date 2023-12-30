"use client";
import { useCart } from "@/context/cart-provider";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";

export default function CartLink() {
  const { cart } = useCart();
  return (
    <Link href={"/cart"} className="relative">
      <div className="absolute -top-1 -right-2 text-xs font-semibold badge badge-primary badge-xs">
        {cart?.item?.map((i) => i.qty).reduce((a, b) => a + b, 0)}
      </div>
      <FaCartArrowDown size={24} />
    </Link>
  );
}
