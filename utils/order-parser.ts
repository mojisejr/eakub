import Stripe from "stripe";
import { ProductMetadata } from "@/interfaces/stripe/product-metadata";

export function orderParser(session: Stripe.Response<Stripe.Checkout.Session>) {
  if (!session) {
    return null;
  }

  const metadata: ProductMetadata = {
    itemIds: JSON.parse(session.metadata!.itemIds!),
    userId: session.metadata!.userId,
  };

  //parse to sanity object
  const order = {
    _type: "order",
    stripeSessionId: session.id,
    stripeIntentId: session.payment_intent,
    items: metadata.itemIds.map((item) => {
      return { _type: "reference", _ref: item };
    }),
    subtotal: session.amount_total,
    paymentStatus: session.payment_status,
    status: session.status,
    timestamp: new Date(session.created * 1e3),
    buyer: {
      _type: "reference",
      _ref: metadata.userId,
    },
  };

  return order;
}
