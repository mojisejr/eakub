"use client";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
export default function LoginButton({ userId }: { userId: string }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [userId]);

  return (
    <>
      {mounted ? (
        <>
          {userId === null ? (
            <SignInButton />
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </>
      ) : (
        <div className="loading loading-spinner" />
      )}
    </>
  );
}
