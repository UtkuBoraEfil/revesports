import { UseFormReturn } from "react-hook-form";
import {
  GENDERS,
  LANG_EXAMS,
  POSITIONS,
  ScholarshipFormSchema,
} from "./form-schemas";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CalendarIcon, Plus, Trash } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { roboto } from "@/app/fonts/fonts";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { PhoneInput } from "../ui/phone-input";

interface ApplyFormProps
  extends Omit<React.ComponentPropsWithRef<"form">, "onSubmit"> {
  children: React.ReactNode;
  form: UseFormReturn<ScholarshipFormSchema>;
  onSubmit: (data: ScholarshipFormSchema) => void;
}

export function ApplyForm({ form, onSubmit, children }: ApplyFormProps) {
  const clearDetailsIfUnchecked = (field: string, detailsField: string) => {
    return (checked: boolean) => {
      // @ts-ignore
      form.setValue(field, checked);
      if (!checked) {
        // @ts-ignore
        form.setValue(detailsField, []);
      }
    };
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-4 text-default-white ${roboto.className} !text-base font-bold`}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {GENDERS.map((gender) => (
                    <SelectItem
                      key={gender}
                      value={gender}
                      className={`${roboto.className} font-bold`}
                    >
                      {gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal text-default-black",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 text-base"
                  align="start"
                >
                  {/* <Calendar
                      mode="single"
                      className={`${roboto.className} text-default-black`}
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    /> */}
                  <Calendar
                    mode="single"
                    className={`${roboto.className} text-default-black`}
                    captionLayout="dropdown-buttons"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1990-01-01")
                    }
                    fromYear={1990}
                    toYear={new Date().getFullYear()}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <PhoneInput
                  required
                  disabled={false}
                  defaultCountry="TR"
                  placeholder={"Enter your phone number"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (cm)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Education</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {POSITIONS.map((position) => (
                    <SelectItem
                      key={position}
                      value={position}
                      className={`${roboto.className} font-bold`}
                    >
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="clubExperience.hasExperience"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  // onCheckedChange={field.onChange}
                  onCheckedChange={clearDetailsIfUnchecked(
                    "clubExperience.hasExperience",
                    "clubExperience.details"
                  )}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Club Experience</FormLabel>
                <FormDescription>
                  Do you have any club experience?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {form.watch("clubExperience.hasExperience") && (
          <div>
            {form.watch("clubExperience.details")?.map((_, index) => (
              <div
                key={index}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name={`clubExperience.details.${index}.teamName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`clubExperience.details.${index}.yearsPlayed`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years Played</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    const currentDetails = form.getValues(
                      "clubExperience.details"
                    );
                    form.setValue(
                      "clubExperience.details",
                      currentDetails?.filter((_, i) => i !== index)
                    );
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 text-default-black"
              onClick={() => {
                const currentDetails =
                  form.getValues("clubExperience.details") || [];
                form.setValue("clubExperience.details", [
                  ...currentDetails,
                  { teamName: "", yearsPlayed: 0 },
                ]);
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Club Experience
            </Button>
          </div>
        )}

        <FormField
          control={form.control}
          name="nationalTeamExperience.hasExperience"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  // onCheckedChange={field.onChange}
                  onCheckedChange={clearDetailsIfUnchecked(
                    "nationalTeamExperience.hasExperience",
                    "nationalTeamExperience.details"
                  )}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>National Team Experience</FormLabel>
                <FormDescription>
                  Do you have any national team experience?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {form.watch("nationalTeamExperience.hasExperience") && (
          <div>
            {form.watch("nationalTeamExperience.details")?.map((_, index) => (
              <div
                key={index}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name={`nationalTeamExperience.details.${index}.teamName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>National Team Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`nationalTeamExperience.details.${index}.year`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    const currentDetails = form.getValues(
                      "nationalTeamExperience.details"
                    );
                    form.setValue(
                      "nationalTeamExperience.details",
                      currentDetails?.filter((_, i) => i !== index)
                    );
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 text-default-black"
              onClick={() => {
                const currentDetails =
                  form.getValues("nationalTeamExperience.details") || [];
                form.setValue("nationalTeamExperience.details", [
                  ...currentDetails,
                  { teamName: "", year: new Date().getFullYear() },
                ]);
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add National Team Experience
            </Button>
          </div>
        )}

        <FormField
          control={form.control}
          name="langExams.hasExam"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  // onCheckedChange={field.onChange}
                  onCheckedChange={clearDetailsIfUnchecked(
                    "langExams.hasExam",
                    "langExams.details"
                  )}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Language Exams</FormLabel>
                <FormDescription>
                  Have you taken any language exams?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {form.watch("langExams.hasExam") && (
          <div>
            {form.watch("langExams.details")?.map((_, index) => (
              <div
                key={index}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name={`langExams.details.${index}.examName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Exam Name</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select exam" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {LANG_EXAMS.map((exam) => (
                            <SelectItem
                              key={exam}
                              value={exam}
                              className={`${roboto.className} font-bold`}
                            >
                              {exam}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`langExams.details.${index}.score`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Score</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    const currentDetails = form.getValues("langExams.details");
                    form.setValue(
                      "langExams.details",
                      currentDetails?.filter((_, i) => i !== index)
                    );
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 text-default-black"
              onClick={() => {
                const currentDetails =
                  form.getValues("langExams.details") || [];
                form.setValue("langExams.details", [
                  ...currentDetails,
                  { examName: LANG_EXAMS[0], score: 0 },
                ]);
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Language Exam
            </Button>
          </div>
        )}

        <FormField
          control={form.control}
          name="highlightVideo.hasVideo"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  // onCheckedChange={field.onChange}
                  onCheckedChange={clearDetailsIfUnchecked(
                    "highlightVideo.hasVideo",
                    "highlightVideo.details"
                  )}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Highlight Video</FormLabel>
                <FormDescription>
                  Do you have any highlight videos?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {form.watch("highlightVideo.hasVideo") && (
          <div>
            {form.watch("highlightVideo.details")?.map((_, index) => (
              <div
                key={index}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name={`highlightVideo.details.${index}.url`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Video URL</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://example.com/video"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    const currentDetails = form.getValues(
                      "highlightVideo.details"
                    );
                    form.setValue(
                      "highlightVideo.details",
                      currentDetails?.filter((_, i) => i !== index)
                    );
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 text-default-black"
              onClick={() => {
                const currentDetails =
                  form.getValues("highlightVideo.details") || [];
                form.setValue("highlightVideo.details", [
                  ...currentDetails,
                  { url: "" },
                ]);
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Highlight Video
            </Button>
          </div>
        )}

        {children}
      </form>
    </Form>
  );
}
