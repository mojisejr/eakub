"use client";
import { useCart } from "@/context/cart-provider";
import { EA } from "@/interfaces/ea";

interface AdddToCartButtonProps {
  ea: EA;
}

export default function AddToCartButton({ ea }: AdddToCartButtonProps) {
  const { addToCart } = useCart();
  return (
    <button onClick={() => addToCart(ea)} className="btn btn-primary">
      เพิ่มลงตระกร้า
    </button>
  );
}
