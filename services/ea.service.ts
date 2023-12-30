import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { CreateNewEADTO } from "@/interfaces/dtos/new-ea.dto";
import { EA } from "@/interfaces/ea";

export async function uploadFile(file: File, type: "file" | "image") {
  try {
    const result = await client.assets.upload(type, file);
    console.log(result);
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
    "createdAt": _createdAt,
    "updatedAt": _updatedAt
  }`;
  const response = await client.fetch<EA[]>(query);
  // console.log(response);
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
