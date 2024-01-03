import { Cart } from "@/interfaces/cart";
import ClientCart from "./clientPage";
import { checkout } from "@/services/stripe.service";
import { redirect } from "next/navigation";

export default async function Cart() {
  async function checkoutAction(cart: Cart, basePath: string) {
    "use server";
    const session = await checkout(cart, basePath);
    if (session == undefined) {
      return;
    }
    redirect(session?.url!);
  }
  return <ClientCart checkout={checkoutAction} />;
}
