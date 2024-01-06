import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { CreateNewEADTO } from "@/interfaces/dtos/new-ea.dto";
import { EA } from "@/interfaces/ea";
import { getUserByUserId } from "./user.service";

export async function uploadFile(file: File, type: "file" | "image") {
  try {
    const result = await client.assets.upload(type, file);
    return {
      _type: type,
      asset: {
        _type: "reference",
        _ref: result._id,
      },
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteFile(fileId: string) {
  try {
    return await client.delete(fileId);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createNewEA(data: CreateNewEADTO) {
  const doc = {
    _type: "product",
    name: data.name,
    banner: data.banner,
    // images: data.images,
    description: data.description,
    price: data.price,
    type: "Smart Scripts",
    product_file: data.asset,
    verified: false,
    isListing: true,
    user: {
      _type: "reference",
      _ref: data.userId,
    },
  };

  try {
    const result = await client.create(doc);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getEA() {
  // const query = groq`*[_type == "product"]`;
  const query = groq`*[_type == "product"]{
    _id,
    name,
    "user": user->name,
    type,
    verified,
    price,
    description,
    "banner": banner.asset->url,
    "images": images[].asset->url,
  }`;
  const response = await client.fetch<EA[]>(query);
  // console.log(response.length);
  return response;
}

export async function getEAById(_id: string) {
  const query = groq`*[_type == "product" && isListing == true && _id == "${_id}"]{
    _id,
    name,
    "user": user->name,
    type,
    verified,
    price,
    description,
    "banner": banner.asset->url,
    "images": images[].asset->url,
    "createdAt": _createdAt,
    "updatedAt": _updatedAt
  }`;

  const response = await client.fetch<EA[]>(query);
  // console.log(response);
  return response[0];
}

export async function isOneTime(eaId: string) {}

export async function updatePurchaser(userId: string, eaId: string) {
  //1. retrieve  userId, productId as input
  //2. patch user is in to productId if not exist
  try {
    const query = groq`*[_type == "product" && _id == "${eaId}" && buyer[]->_id match "${userId}"] {
      "founded": true
    } `;

    const response = await client.fetch<any[]>(query);

    if (response.length <= 0) {
      await client
        .patch(eaId)
        .setIfMissing({ buyer: [] })
        .append("buyer", [{ _type: "reference", _ref: userId }])
        .commit({
          autoGenerateArrayKeys: true,
        });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getUserPerchasedEA(userId: string) {
  try {
    const user = await getUserByUserId(userId);
    const query = groq`*[_type == "product" && buyer[]->_id match "${user._id}"] {
      name,
      "user": user->name,
      "link": product_file.asset->url,
      type,
      "createdAt": _createdAt
    }`;
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getUserOwnerEA(userId: string) {
  try {
    const user = await getUserByUserId(userId);
    const query = groq`*[_type == "product" && user->_id == "${user._id}"] {
      name,
      type,
      price,
      "buyer": length(buyer),
      "total": price * length(buyer),
    }`;
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
