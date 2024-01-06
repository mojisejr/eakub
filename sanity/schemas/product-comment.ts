import { defineType, defineField } from "sanity";

export const productCommentType = defineType({
  name: "product_comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "comment",
      title: "Comment",
      type: "text",
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.max(5).min(0),
    }),

    defineField({
      name: "user",
      title: "author",
      type: "reference",
      to: [{ type: "user" }],
    }),

    defineField({
      name: "product",
      title: "product",
      type: "reference",
      to: [{ type: "product" }],
    }),
  ],
});
