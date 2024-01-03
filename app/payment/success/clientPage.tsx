"use client";
import Link from "next/link";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface ClientSuccessProps {
  userId: string;
}
export default function ClientSuccess({ userId }: ClientSuccessProps) {
  useEffect(() => {
    if (userId) {
      const cartId = `cart_${userId}`;
      localStorage.removeItem(cartId);
    }
  }, [userId]);
  return (
    <>
      <div className="w-full min-h-[65vh] flex justify-center">
        <div className="flex flex-col gap-4 justify-center items-center max-w-md">
          <FaCheckCircle className="text-primary" size={120} />
          <div className="font-semibold text-primary text-[30px]">Success!</div>
          <p>
            "Congratulations! 🎉 Your payment was a slam dunk! Now, let's keep
            the shopping spree alive – dive back in and discover more treasures!
            🛍️ Happy shopping!"
          </p>
          <Link href="/market" className="hover:underline text-primary">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}
