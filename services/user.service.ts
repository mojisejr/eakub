import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { CreateNewUserDTO } from "@/interfaces/dtos/new-user.dto";

export async function checkIfSignedUser(userId: string) {
  const query = groq`*[_type == "user" && userId == "${userId}"]`;
  try {
    const response = await client.fetch(query);
    if (response.length > 0) {
      return {
        result: true,
        data: response[0],
      };
    } else {
      return {
        result: false,
        data: [null],
      };
    }
  } catch (error) {
    console.log(error);
  }
}

export async function createNewUser({ userId, email }: CreateNewUserDTO) {
  const isSigned = await checkIfSignedUser(userId);

  if (isSigned?.result) {
    return await getUserByUserId(userId);
  } else {
    const document = {
      _type: "user",
      name: `${userId}@eakub`,
      userId,
      email,
    };

    try {
      const result = await client.create(document);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export async function getUserByUserId(userId: string) {
  const query = groq`*[_type == "user" && userId == "${userId}"]`;
  try {
    const [user] = await client.fetch(query);
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
