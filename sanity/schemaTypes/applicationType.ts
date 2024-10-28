import { UserIcon } from "lucide-react";
import { defineField, defineType, defineArrayMember } from "sanity";

export const applicationType = defineType({
  name: "application",
  title: "Application",
  type: "document",
  icon: UserIcon,
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
      name: "instagramUsername",
      type: "string",
    }),
    defineField({
      name: "gender",
      type: "string",
      options: {
        list: ["erkek", "kadın", "diğer"],
      },
    }),
    defineField({
      name: "dob",
      type: "date",
    }),
    defineField({
      name: "height",
      type: "number",
    }),
    defineField({
      name: "phone",
      type: "string",
    }),
    defineField({
      name: "education",
      type: "string",
    }),
    defineField({
      name: "positions",
      title: "Positions",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
          options: {
            list: [
              "Setter (S)",
              "Outside Hitter (OH)",
              "Opposite Hitter (Opp or RS)",
              "Libero (L)",
              "Middle Blocker (MB or MH)",
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "clubExperience",
      type: "object",
      fields: [
        defineField({
          name: "hasExperience",
          type: "boolean",
        }),
        defineField({
          name: "details",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "teamName", type: "string" }),
                defineField({ name: "yearsPlayed", type: "number" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "nationalTeamExperience",
      type: "object",
      fields: [
        defineField({
          name: "hasExperience",
          type: "boolean",
        }),
        defineField({
          name: "details",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "teamName", type: "string" }),
                defineField({ name: "year", type: "number" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "langExams",
      type: "object",
      fields: [
        defineField({
          name: "hasExam",
          type: "boolean",
        }),
        defineField({
          name: "details",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "examName",
                  type: "string",
                  options: {
                    list: ["TOEFL", "IELTS", "SAT", "ACT", "Duolingo", "Other"],
                  },
                }),
                defineField({
                  name: "otherExamName",
                  type: "string",
                }),
                defineField({ name: "score", type: "number" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "highlightVideo",
      type: "object",
      fields: [
        defineField({
          name: "hasVideo",
          type: "boolean",
        }),
        defineField({
          name: "details",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [defineField({ name: "url", type: "url" })],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "positions",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: Array.isArray(subtitle) ? subtitle.join(", ") : subtitle,
      };
    },
  },
});
