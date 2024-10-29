import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, {
      message: "Name must be at least 2 character",
    })
    .max(50, {
      message: "Name must be at most 50 character",
    }),
  email: z.string().email().min(5, {
    message: "Email must be at least 5 character",
  }),
  message: z.string().min(10).max(500),
});

export type CreateContactFormScehma = z.infer<typeof contactFormSchema>;

export const GENDERS = ["erkek", "kadın", "diğer"] as const;
export const POSITIONS = [
  "Setter (S)",
  "Outside Hitter (OH)",
  "Opposite Hitter (Opp or RS)",
  "Libero (L)",
  "Middle Blocker (MB or MH)",
] as const;
export const LANG_EXAMS = [
  "TOEFL",
  "IELTS",
  "SAT",
  "ACT",
  "Duolingo",
  "Diğer",
] as const;

export const scholarshipFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, {
      message: "Name must be at least 2 character",
    })
    .max(50, {
      message: "Name must be at most 50 character",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  instagramUsername: z
    .string({
      required_error: "Instagram username is required",
    })
    .min(1, {
      message: "Instagram username is required",
    }),
  gender: z.enum(GENDERS),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  height: z.number({
    required_error: "A height is required.",
  }),
  phone: z.string({
    required_error: "A phone number is required.",
  }),
  education: z.string({
    required_error: "An education is required.",
  }),
  // position: z.enum(POSITIONS),
  positions: z
    .array(z.enum(POSITIONS))
    .min(1, { message: "At least one position must be selected" }),
  clubExperience: z
    .object({
      hasExperience: z.boolean({
        required_error: "Club experience is required",
      }),
      details: z
        .array(
          z.object({
            teamName: z.string().min(1, { message: "Team name is required" }),
            yearsPlayed: z
              .number({
                required_error: "Years played are required",
              })
              .positive({ message: "Years played must be a positive number" }),
          })
        )
        .optional(),
    })
    .refine(
      (input) => {
        if (input?.hasExperience && input?.details?.length === 0) {
          return false;
        }
        return true;
      },
      {
        message:
          "Club experience details are required if club experience is indicated",
      }
    ),
  nationalTeamExperience: z
    .object({
      hasExperience: z.boolean({
        required_error: "National team experience is required",
      }),
      details: z
        .array(
          z.object({
            teamName: z
              .string()
              .min(1, { message: "National team name is required" }),
            year: z
              .number({
                required_error: "Year is required",
              })
              .positive({ message: "Year must be a positive number" }),
          })
        )
        .optional(),
    })
    .refine(
      (input) => {
        if (input?.hasExperience && input?.details?.length === 0) {
          return false;
        }
        return true;
      },
      {
        message:
          "National team experience details are required if national team experience is indicated",
      }
    ),
  langExams: z
    .object({
      hasExam: z.boolean({
        required_error: "Language exams are required",
      }),
      details: z.array(
        z.object({
          examName: z.enum(LANG_EXAMS),
          otherExamName: z.string().optional(),
          score: z.number({
            required_error: "Exam score is required",
          }),
        })
      ),
    })
    .refine(
      (input) => {
        if (input?.hasExam && input?.details?.length === 0) {
          return false;
        }
        return true;
      },
      {
        message: "Language exam details are required if exams are indicated",
      }
    )
    .refine(
      (input) => {
        if (input?.hasExam) {
          return input.details.every(
            (detail) => detail.examName !== "Diğer" || detail.otherExamName
          );
        }
        return true;
      },
      {
        message: "Please specify the other exam name",
      }
    ),
  highlightVideo: z.object({
    hasVideo: z.boolean({
      required_error: "Highlight video is required",
    }),
    details: z.array(
      z.object({
        url: z.string().url({ message: "Video URL is invalid" }),
      })
    ),
  }),
});

export type ScholarshipFormSchema = z.infer<typeof scholarshipFormSchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .email({ message: "Lütfen geçerli bir e-posta adresi giriniz." })
    .min(5, {
      message: "Email must be at least 5 character",
    }),
});

export type NewsletterSchema = z.infer<typeof newsletterSchema>;
