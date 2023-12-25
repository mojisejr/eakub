"use client";
import { SignInButton } from "@clerk/nextjs";
import BaseLayout1 from "@/components/shared/base-layout";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Unauthorized() {
  const { userId } = useAuth();
  const { replace } = useRouter();

  useEffect(() => {
    if (userId) {
      replace("/");
    }
  }, [userId]);

  return (
    <BaseLayout1>
      <div className="h-[65vh] w-full flex justify-center items-center">
        <div className="card shadow bg-base-100">
          {userId == null ? (
            <div className="card-body max-w-md">
              <h1 className="card-title text-accent">กรุณาเข้าสู่ระบบ</h1>
              <SignInButton afterSignInUrl="/">เข้าสู่ระบบ</SignInButton>
            </div>
          ) : (
            <div className="loading loading-spinner"></div>
          )}
        </div>
      </div>
    </BaseLayout1>
  );
}
