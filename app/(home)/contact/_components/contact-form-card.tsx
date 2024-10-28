"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  CreateContactFormScehma,
} from "@/components/forms/form-schemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { useTransition } from "react";
import { createContact } from "@/actions/actions";

export function ContactFormCard() {
  const [isCreatePending, startCreateTransition] = useTransition();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(input: CreateContactFormScehma) {
    startCreateTransition(async () => {
      const contact = {
        _type: "contact",
        ...input,
      };
      const { status } = await createContact(contact);

      if (status === "error") {
        toast.error("Something went wrong.");
        return;
      }

      form.reset();

      toast.success(`Teşekkürler ${input.name}`, {
        description: "Mesajın bize ulaştı! En kısa sürede dönüş yapacağız.",
      });
    });
  }

  return (
    <Card className="max-w-3xl w-full bg-default-black text-default-white">
      <CardHeader>
        <CardTitle className="text-lg">Bize ulaşın!</CardTitle>
        <CardDescription>
          Bilmek istediğin her şeyi sorabilirsin.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ContactForm
          form={form}
          onSubmit={onSubmit}
        >
          <Button
            disabled={isCreatePending}
            className="w-full !bg-default-white text-default-black"
          >
            {isCreatePending && (
              <Loader
                className="size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Gönder
          </Button>
        </ContactForm>
      </CardContent>
    </Card>
  );
}
