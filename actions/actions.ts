"use server";

import { client } from "@/sanity/lib/client";

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
