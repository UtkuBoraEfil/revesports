import { ContactIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  icon: ContactIcon,
  readOnly: true,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "message",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      author: "email",
    },
  },
});
