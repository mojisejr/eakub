import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs";
import LoginButton from "./clientNavbar";
import { checkIfSignedUser, createNewUser } from "@/services/user.service";
import Link from "next/link";
import CartLink from "./clientCartLink";

export default async function Navbar() {
  const { userId } = auth();

  if (userId) {
    const signed = await checkIfSignedUser(userId);
    if (!signed?.result) {
      const user = await currentUser();
      const email = user?.emailAddresses.find(
        (email) => email.id == user.primaryEmailAddressId
      )?.emailAddress;
      await createNewUser({ userId, email });
    }
  }

  return (
    <div className="sticky navbar w-full h-[60px] bg-base-100 border-b-[1px] border-white border-opacity-30 px-10">
      <div className="navbar-start">
        <div className="relative w-[200px] h-[45px]">
          <Link href="/">
            <Image src="/images/logo.png" fill alt="logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-center flex gap-4">
        <Link className="btn btn-ghost" href="/market">
          Market
        </Link>
        <Link className="btn btn-ghost" href="/upload">
          Upload
        </Link>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2 items-center">
          <CartLink />
          <LoginButton userId={userId!} />
        </div>
      </div>
    </div>
  );
}
