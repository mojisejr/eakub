import { defineField, defineType } from "sanity";

export const withdrawLogType = defineType({
  name: "withdraw_logs",
  title: "Witdraw Logs",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
    }),

    defineField({
      name: "amounts",
      title: "Amounts",
      type: "number",
    }),

    defineField({
      name: "transaction_date",
      title: "Transaction Date",
      type: "datetime",
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "In-Progress", value: "in_progress" },
          { title: "Falied", value: "failed" },
          { title: "Success", value: "success" },
        ],
      },
    }),
  ],
});
