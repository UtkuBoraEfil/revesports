"use server";

import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const createContact = async (input: any) => {
  try {
    const contact = {
      _type: "contact",
      ...input,
    };
    await client
      .withConfig({
        token: process.env.SANITY_WRITE_API_TOKEN,
      })
      .create(contact);

    return {
      status: "success",
    };
  } catch (error) {
    console.error("[ERROR_WHILE_CREATING_CONTACT]", error);
    return {
      status: "error",
    };
  }
};

export const createApplication = async (input: any) => {
  try {
    const contact = {
      _type: "application",
      ...input,
    };
    await client
      .withConfig({
        token: process.env.SANITY_WRITE_API_TOKEN,
      })
      .create(contact);

    return {
      status: "success",
    };
  } catch (error) {
    console.error("[ERROR_WHILE_CREATING_CONTACT]", error);
    return {
      status: "error",
    };
  }
};

export const createNewsletter = async (input: any) => {
  try {
    const newsletter = {
      _type: "newsletter",
      ...input,
    };
    await client
      .withConfig({
        token: process.env.SANITY_WRITE_API_TOKEN,
      })
      .create(newsletter);

    return {
      status: "success",
    };
  } catch (error) {
    console.error("[ERROR_WHILE_CREATING_CONTACT]", error);
    return {
      status: "error",
    };
  }
};

export async function checkEmailExists(email: string) {
  const query = defineQuery(`*[_type == "newsletter" && email == $email][0]`);
  const params = { email };

  try {
    const result = await client.fetch(query, params);
    return !!result; // Returns true if email exists, false otherwise
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
}
