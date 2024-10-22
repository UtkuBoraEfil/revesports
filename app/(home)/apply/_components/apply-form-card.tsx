"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ScholarshipFormSchema,
  scholarshipFormSchema,
} from "@/components/forms/form-schemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useTransition } from "react";
import { ApplyForm } from "@/components/forms/apply-form";
import { toast } from "sonner";
import { createApplication } from "@/actions/actions";
import { nanoid } from "nanoid";

export function ApplyFormCard() {
  const [isCreatePending, startCreateTransition] = useTransition();

  function addKeysToArrayItems(
    obj: ScholarshipFormSchema
  ): ScholarshipFormSchema {
    if (Array.isArray(obj)) {
      // @ts-ignore
      return obj.map((item) => ({
        ...item,
        _key: nanoid(),
      }));
    } else if (obj instanceof Date) {
      // @ts-ignore
      return obj.toISOString();
    } else if (typeof obj === "object" && obj !== null) {
      const newObj: any = {};
      for (const key in obj) {
        // @ts-ignore
        newObj[key] = addKeysToArrayItems(obj[key]);
      }
      return newObj;
    }
    return obj;
  }
  const form = useForm<z.infer<typeof scholarshipFormSchema>>({
    resolver: zodResolver(scholarshipFormSchema),
    defaultValues: {
      name: "",
      gender: "male",
      dob: new Date(),
      height: 170,
      phone: "",
      education: "",
      position: "Setter (S)",
      clubExperience: { hasExperience: false, details: [] },
      nationalTeamExperience: { hasExperience: false, details: [] },
      langExams: { hasExam: false, details: [] },
      highlightVideo: { hasVideo: false, details: [] },
    },
  });

  function onSubmit(input: ScholarshipFormSchema) {
    startCreateTransition(async () => {
      const inputWithKeys = addKeysToArrayItems(input);

      const application = {
        _type: "application",
        ...inputWithKeys,
      };
      const { status } = await createApplication(application);

      if (status === "error") {
        toast.error("Something went wrong.");
        return;
      }

      form.reset();

      toast.success(`Thanks ${input.name}`, {
        description: "Your application has been sent!",
      });
    });
  }

  return (
    <Card className="w-full bg-default-black text-default-white">
      <CardHeader>
        <CardTitle className="text-3xl">Apply now!</CardTitle>
        <CardDescription className="text-lg">
          You can ask anything you want to know..
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ApplyForm
          form={form}
          onSubmit={onSubmit}
        >
          <Button
            disabled={isCreatePending}
            className="w-full !bg-default-white text-default-black text-base"
          >
            {isCreatePending && (
              <Loader
                className="size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Submit
          </Button>
        </ApplyForm>
      </CardContent>
    </Card>
  );
}
