"use server";

import {
  CreateContactFormScehma,
  NewsletterSchema,
  ScholarshipFormSchema,
} from "@/components/forms/form-schemas";
import ApplyFormEmailToAdmin from "@/emails/apply-form-email-to-admin";
import ApplyFormEmailToUser from "@/emails/apply-form-email-to-user";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { Resend } from "resend";

export const createContact = async (input: CreateContactFormScehma) => {
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

export const createApplication = async (input: ScholarshipFormSchema) => {
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

    await sendEmailToUser(input.name, input.email);
    await sendEmailToAdmin(input);
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

export const createNewsletter = async (input: NewsletterSchema) => {
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

export async function sendEmailToUser(userFirstname: string, email: string) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Revesport <info@reve-sport.com>",
      to: [email],
      subject: "Teşekkürler",
      react: ApplyFormEmailToUser({ userFirstname: userFirstname }),
    });

    if (error) {
      console.error("Error sending email to user:", error);
    }

    // console.log("Email sent to user:", data);
  } catch (error) {
    console.error("Error sending email to user:", error);
  }
}

export async function sendEmailToAdmin(input: ScholarshipFormSchema) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Revesport <notify@reve-sport.com>",
      to: ["info@reve-sport.com", "ardakaanaydilek@gmail.com"],
      subject: "Revesport - Yeni Başvuru",
      react: ApplyFormEmailToAdmin({ input: input }),
    });

    if (error) {
      console.error("Error sending email to admin:", error);
    }

    // console.log("Email sent to admin:", data);
  } catch (error) {
    console.error("Error sending email to admin:", error);
  }
}
