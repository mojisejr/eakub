"use client";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

export default function Cancel() {
  const { userId } = useAuth();

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
          <IoMdCloseCircle className="text-error" size={120} />
          <div className="font-semibold text-error text-[30px]">Canceled</div>
          <p>
            "Oops! It looks like the payment party got postponed. No worries,
            the shopping fiesta is still on – swing back to your cart and let's
            keep the celebration going!"
          </p>
          <Link href="/market" className="hover:underline text-primary">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}
