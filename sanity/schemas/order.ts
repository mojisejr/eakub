import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Payment Order",
  type: "document",
  fields: [
    defineField({
      name: "stripeSessionId",
      title: "Stripe Session ID",
      type: "string",
      readOnly: true,
    }),

    defineField({
      name: "stripeIntentId",
      title: "Stripe Intent ID",
      type: "string",
      readOnly: true,
    }),

    defineField({
      name: "items",
      title: "Purchasing Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "product",
            },
          ],
        },
      ],
      readOnly: true,
    }),

    defineField({
      name: "subtotal",
      title: "Sub total",
      type: "number",
    }),

    defineField({
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
    }),

    defineField({
      name: "status",
      title: "Session Status",
      type: "string",
    }),

    defineField({
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
    }),

    defineField({
      name: "buyer",
      title: "Buyer",
      type: "reference",
      to: [{ type: "user" }],
    }),
  ],
});
