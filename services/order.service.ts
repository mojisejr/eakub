import { groq } from "next-sanity";
import { getSessionById } from "./stripe.service";
import { client } from "@/sanity/lib/client";
import { orderParser } from "../utils/order-parser";
import { updatePurchaser } from "./ea.service";

export async function createOrder(sessionId: string) {
  try {
    if (sessionId == "" || sessionId == null || sessionId == undefined) return;
    const session = await getSessionById(sessionId);
    const found = await hasOrder(sessionId!);
    if (found) return;
    const order = orderParser(session);
    const response = await client.create(order!);
    await Promise.all(
      response.items.map(
        async (item) => await updatePurchaser(order?.buyer._ref!, item._ref)
      )
    );
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function hasOrder(sessionId: string) {
  const query = groq`*[_type == "order" &&  stripeSessionId == "${sessionId}"]`;
  const session = (await client.fetch(query)) as any[];

  if (session.length <= 0) {
    return false;
  } else {
    return true;
  }
}
