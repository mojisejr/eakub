import Image from "next/image";
import ClientHomePage from "./clientPage";
import BaseLayout from "@/components/shared/base-layout";

export default function Home() {
  return (
    <BaseLayout>
      <ClientHomePage />
    </BaseLayout>
  );
}
