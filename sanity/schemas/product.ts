import { FileRule, defineField, defineType } from "sanity";

// userId: string;
// title: string; //name
// banner?: string;
// images: string[];
// description: string;
// price: number;
// type: string;
// asset: string;

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "product's big title",
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "banner",
      title: "Banner",
      type: "image",
      description: "product banner",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "images",
      title: "Images",
      description: "Content Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.max(3),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      // validation: (Rule) => Rule.required(),
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
      // validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "product_file",
      title: "Product File",
      type: "file",
      // validation: (Rule: FileRule) => Rule.required().assetRequired(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
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

    defineField({
      name: "onetime",
      title: "One Time Purchasing",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "buyer",
      title: "buyers",
      type: "array",
      of: [{ type: "reference", to: [{ type: "user" }] }],
    }),
  ],
});
