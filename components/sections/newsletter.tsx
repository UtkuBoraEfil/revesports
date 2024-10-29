"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { newsletterSchema } from "../forms/form-schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader } from "lucide-react";
import { createNewsletter } from "@/actions/actions";

export function Newsletter() {
  const [isCreatePending, startCreateTransition] = useTransition();

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(input: { email: string }) {
    startCreateTransition(async () => {
      const { status } = await createNewsletter(input);

      if (status === "error") {
        toast.error("Something went wrong.");
        return;
      }

      form.reset();

      toast.success(`Teşekkürler ${input.email}`, {
        description: "Bültenimize kayıt oldun!.",
      });
    });
  }
  return (
    <section className="md:px-14 px-6 md:py-12 py-10 flex flex-col md:flex-row items-center justify-between bg-default-white text-default-black gap-4 relative">
      <h1 className="lg:text-8xl md:text-6xl text-5xl">BÜLTEN</h1>
      <div className=" md:w-1/2 w-full py-2 relative">
        <Form {...form}>
          <form
            className="w-full bg-default-black rounded-full flex items-center md:px-5 md:py-3 px-3 py-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <input
                      type="email"
                      placeholder="senin.emailin@gmail.com"
                      className="w-full bg-default-black font-roboto placeholder:opacity-60 text-default-white focus:outline-none text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute -bottom-4 z-[10]" />
                </FormItem>
              )}
            />
            <button
              className="bg-default-white rounded-3xl md:py-3 md:px-6 py-2 px-3 md:text-sm text-[12px] lg:text-base min-w-fit flex items-center gap-2"
              disabled={isCreatePending}
            >
              {isCreatePending && (
                <Loader
                  className="size-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              ABONE OL
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
}
