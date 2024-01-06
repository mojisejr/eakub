import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { CreateCommentDTO } from "@/interfaces/dtos/new-comment";
import { Comment } from "@/interfaces/product-comment";

export async function getCommentsByProductId(productId: string) {
  try {
    const query = groq`*[_type == "product_comment" && product._ref == "${productId}"]{
        _id,
        "user": user->name,
       comment,
       rating,
       "createdAt": _createdAt

    }`;
    const response = await client.fetch<Comment[]>(query);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function CanComment(productId: string, userId: string) {
  //1 only buyer can comment
  //2 comment only once per person
  try {
    const query = groq`*[_type == "product_comment" && user._ref == "${userId}" && product._ref == "${productId}"][0]`;
    const isCommented = await client.fetch(query);

    const query2 = groq`*[_type == "product" && buyer[]->_id match "${userId}"][0]`;
    const isBuyer = await client.fetch(query2);

    if (isCommented || !isBuyer) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function createComment(commentData: CreateCommentDTO) {
  try {
    const canComment = await CanComment(
      commentData.productId,
      commentData.authorId
    );
    if (!canComment) throw new Error("already comment");

    const commentDoc = {
      _type: "product_comment",
      comment: commentData.content,
      rating: commentData.rating,
      user: { _type: "reference", _ref: commentData.authorId },
      product: { _type: "reference", _ref: commentData.productId },
    };

    const result = await client.create(commentDoc);
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
