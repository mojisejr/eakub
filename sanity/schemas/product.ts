import { FileRule, defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "product's big title",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subitle",
      title: "Sub-Title",
      type: "string",
      description: "product's sub title",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "product_image",
      title: "Product Image",
      type: "image",
      description: "product cover image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "description_images",
      title: "Description Images",
      description: "Content Images",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "verified",
      title: "Verified ?",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "isListing",
      title: "Listing ?",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "type",
      title: "Product's type",
      type: "string",
      options: {
        list: [
          { title: "Indicator", value: "indicator" },
          { title: "Smart Scripts", value: "smart script" },
          { title: "Trading Rooms", value: "trading room" },
          { title: "Dashboard", value: "dashboard" },
          { title: "Premium Tools", value: "premium tools" },
          { title: "Education", value: "education" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "product_file",
      title: "Product File",
      type: "file",
      validation: (Rule: FileRule) => Rule.required().assetRequired(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "comments",
      title: "Comments",
      description: "product's comment",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product_comment" }],
        },
      ],
    }),

    defineField({
      name: "user",
      title: "user",
      description: "product's owner",
      type: "reference",
      to: [{ type: "user" }],
    }),
  ],
});
