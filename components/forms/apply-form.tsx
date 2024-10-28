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
              <FormLabel>İsim</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
                  placeholder="Yaren Deniz"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="text-base"
                  placeholder="senin.emailin@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="instagramUsername"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instagram Kullanıcı Adı</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
                  placeholder="@kullanıcıadı"
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
              <FormLabel>Cinsiyet</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Cinsiyet Seçin"
                      className="text-base"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="text-base">
                  {GENDERS.map((gender) => (
                    <SelectItem
                      key={gender}
                      value={gender}
                      className={`${roboto.className} font-bold text-base`}
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
              <FormLabel>Doğum Tarihi</FormLabel>
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
                        <span>Tarih Seç</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 text-base"
                  align="start"
                >
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
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <PhoneInput
                  required
                  disabled={false}
                  defaultCountry="TR"
                  placeholder={"551 123 4567"}
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
                  className="text-base"
                  type="number"
                  min={0}
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
              <FormLabel>Eğitim Bilgileri</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="positions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Oynadığınız Pozisyonlar</FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2">
                  {POSITIONS.map((position) => (
                    <label
                      key={position}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        checked={field.value?.includes(position)}
                        onCheckedChange={(checked) => {
                          const updatedPositions = checked
                            ? [...(field.value || []), position]
                            : field.value?.filter((val) => val !== position) ||
                              [];
                          field.onChange(updatedPositions);
                        }}
                      />
                      <span>{position}</span>
                    </label>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="clubExperience.hasExperience"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border-default-white border-2 p-4">
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
                <FormLabel>Takım Deneyimi</FormLabel>
                <FormDescription>
                  Takım deneyiminiz var mı?{" "}
                  <span className="text-[10px] text-red-500">
                    (Var olarak işaretlerseniz butona tıklayarak ayrıntıları
                    eklemeniz gerekir)
                  </span>
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
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name={`clubExperience.details.${index}.teamName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Takım Adı</FormLabel>
                      <FormControl>
                        <Input
                          className="text-base"
                          {...field}
                        />
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
                      <FormLabel>Kaç Yıl Oynadınız?</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="text-base"
                          min={0}
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
                  className="mb-4 inline-block"
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
              className="text-default-black"
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
              Takım Deneyimi Ekle
            </Button>
          </div>
        )}

        <FormField
          control={form.control}
          name="nationalTeamExperience.hasExperience"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border-2 border-default-white p-4">
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
                <FormLabel>Milli Takım Deneyimi</FormLabel>
                <FormDescription>
                  Milli takım deneyiminiz var mı?{" "}
                  <span className="text-[10px] text-red-500">
                    (Var olarak işaretlerseniz butona tıklayarak ayrıntıları
                    eklemeniz gerekir)
                  </span>
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
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name={`nationalTeamExperience.details.${index}.teamName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Milli Takım Adı</FormLabel>
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
                      <FormLabel>Yıl</FormLabel>
                      <FormControl>
                        <Input
                          className="text-base"
                          type="number"
                          min={2000}
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
                  className="mb-4 inline-block"
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
              className="text-default-black"
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
              Milli Takım Deneyimi Ekle
            </Button>
          </div>
        )}

        <FormField
          control={form.control}
          name="langExams.hasExam"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border-2 border-default-white p-4">
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
                <FormLabel>Girdiğiniz Dil Sınavları</FormLabel>
                <FormDescription>
                  Girdiğiniz dil sınavı var mı?{" "}
                  <span className="text-[10px] text-red-500">
                    (Var olarak işaretlerseniz butona tıklayarak ayrıntıları
                    eklemeniz gerekir)
                  </span>
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {form.watch("langExams.hasExam") && (
          <div>
            {form.watch("langExams.details")?.map((detail, index) => (
              <div
                key={index}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name={`langExams.details.${index}.examName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sınav İsmi</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sınav Seç" />
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

                {form.watch(`langExams.details.${index}.examName`) ===
                  "Diğer" && (
                  <FormField
                    control={form.control}
                    name={`langExams.details.${index}.otherExamName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Belirtiniz</FormLabel>
                        <FormControl>
                          <Input
                            className="text-base"
                            placeholder="Sınav Adı"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <FormField
                  control={form.control}
                  name={`langExams.details.${index}.score`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Puan</FormLabel>
                      <FormControl>
                        <Input
                          className="text-base"
                          type="number"
                          min={0}
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
                  className="mb-4 inline-block"
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
              className=" text-default-black"
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
              Dil Sınavı Ekle
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
                  Highlight videonuz var mı?{" "}
                  <span className="text-[10px] text-red-500">
                    (Var olarak işaretlerseniz videonun olduğu URL'yi girmeniz
                    gerekir)
                  </span>
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
                className="space-y-2"
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
                          className="text-base"
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
                  className="mb-4 inline-block"
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
              className=" text-default-black"
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
              Highlight Video Ekle
            </Button>
          </div>
        )}

        {children}
      </form>
    </Form>
  );
}
