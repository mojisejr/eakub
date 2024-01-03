import Link from "next/link";
import { createOrder } from "@/services/order.service";
import { auth } from "@clerk/nextjs";
import ClientSuccess from "./clientPage";

export default async function Success({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  await createOrder(searchParams.id!);
  const { userId } = auth();

  return (
    <>
      <ClientSuccess userId={userId!} />
    </>
  );
}
