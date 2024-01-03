import Stripe from "stripe";

export interface LineItems {
  id: string;
  line: Stripe.Checkout.SessionCreateParams.LineItem;
}
