"use client";
import { useCart } from "@/context/cart-provider";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";

export default function CartLink() {
  return (
    <Link href={"/cart"}>
      <FaCartArrowDown size={24} />
    </Link>
  );
}
