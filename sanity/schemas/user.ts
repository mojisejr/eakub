import { defineField, defineType } from "sanity";

export const userType = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "user email address",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "user's name",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tel",
      title: "Telephone",
      type: "string",
      description: "user's telephone number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "product",
      title: "Products",
      description: "products of owner",
      type: "array",
      of: [{ type: "product" }],
      readOnly: true,
    }),
  ],
});
