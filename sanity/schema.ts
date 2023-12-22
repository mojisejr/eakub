import { type SchemaTypeDefinition } from "sanity";
import { userType } from "./schemas/user";
import { productType } from "./schemas/product";
import { productCommentType } from "./schemas/product-comment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userType, productType, productCommentType],
};
