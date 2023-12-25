import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs";
import LoginButton from "./clientNavbar";
import { checkIfSignedUser, createNewUser } from "@/services/user.service";

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
          <Image src="/images/logo.png" fill alt="logo" />
        </div>
      </div>
      <div className="navbar-end">
        <LoginButton userId={userId!} />
      </div>
    </div>
  );
}
