import { Cart, CartItem } from "@/interfaces/cart";
import { LineItems } from "@/interfaces/stripe/line-item";
import { Stripe } from "stripe";
import { getUserByUserId } from "./user.service";

const config: Stripe.StripeConfig = {
  apiVersion: "2023-10-16",
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, config);

export async function stripeCheckOut(
  params: Stripe.Checkout.SessionCreateParams
) {
  try {
    const session = await stripe.checkout.sessions.create(params);
    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function createCheckoutParam(
  userId: string,
  lineItems: LineItems[],
  basePath: string
) {
  const items = lineItems.map((item) => item.line);
  const itemIds = lineItems.map((item) => item.id);
  const user = await getUserByUserId(userId);
  const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card", "promptpay"],
    line_items: items,
    metadata: {
      userId: user._id,
      itemIds: JSON.stringify(itemIds),
    },
    success_url: `${basePath}/payment/success?id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${basePath}/payment/cancel`,
  };
  return params;
}

export function createLineItems(cart: Cart) {
  const lineItems: LineItems[] = cart.item?.map((item: CartItem) => {
    return {
      id: item.product._id,
      line: {
        price_data: {
          currency: "thb",
          product_data: {
            name: item.product.name,
            images: item.product.images ?? [],
          },
          unit_amount: (item.product.price * 100) as number,
        },
        quantity: item.qty as number,
      },
    };
  })!;
  return lineItems;
}

export async function getSessionById(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return session;
}

export async function checkout(cart: Cart, basePath: string) {
  const lineItems = createLineItems(cart);
  const checkoutParams = await createCheckoutParam(
    cart.userId,
    lineItems,
    basePath
  );
  const checkoutSession = await stripeCheckOut(checkoutParams);
  return checkoutSession;
}
