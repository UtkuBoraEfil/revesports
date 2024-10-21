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

export const GENDERS = ["male", "female", "other"] as const;
export const POSITIONS = [
  "Setter (S)",
  "Outside Hitter (OH)",
  "Opposite Hitter (Opp or RS)",
  "Libero (L)",
  "Middle Blocker (MB or MH)",
] as const;
export const LANG_EXAMS = ["TOEFL", "IELTS", "SAT", "ACT", "Duolingo"] as const;

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
  position: z.enum(POSITIONS),
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
          score: z.number({
            required_error: "Exam score is required",
          }),
        })
      ),
    })
    .refine((input) => {
      if (input?.hasExam && input?.details?.length === 0) {
        return false;
      }
      return true;
    }),

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
