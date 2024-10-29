import { Newspaper } from "lucide-react";
import { defineType } from "sanity";

export const newsletterType = defineType({
  name: "newsletter",
  title: "Newsletter",
  type: "document",
  icon: Newspaper,
  readOnly: true,
  fields: [
    {
      name: "email",
      type: "string",
    },
  ],
});
