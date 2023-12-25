import BaseLayout1 from "@/components/shared/base-layout";
import { auth } from "@clerk/nextjs";
import UploadForm from "@/components/upload/form";
import { RedirectType, redirect } from "next/navigation";

export default async function Upload() {
  const { userId } = auth();

  if (!userId) {
    redirect("/unauthorized", RedirectType.replace);
  }

  return (
    <BaseLayout1>
      <div className="py-[50px]">
        <div className="grid grid-cols-2 place-items-center">
          <UploadForm userId={userId} />
          <img src="images/Bull.png" className="w-full max-w-[750px]" />
        </div>
      </div>
    </BaseLayout1>
  );
}
