
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SchoolFormData, RespondentType } from "@/types/school";

const formSchema = z.object({
  respondent_type: z.enum(["HEAD_OF_SCHOOL", "TEACHER", "ADMIN_STAFF", "IN_CHARGE_BLOCK", "IN_CHARGE_OTHER_SCHOOL"] as const),
  respondent_name: z.string().min(1, "Respondent name is required"),
  respondent_mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  respondent_email: z.string().email("Invalid email address"),
});

interface RespondentFormProps {
  data: Partial<SchoolFormData>;
  onUpdate: (data: Partial<SchoolFormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const RespondentForm = ({ data, onUpdate, onSubmit, onBack }: RespondentFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      respondent_type: data.respondent_type || "HEAD_OF_SCHOOL",
      respondent_name: data.respondent_name || "",
      respondent_mobile: data.respondent_mobile || "",
      respondent_email: data.respondent_email || "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdate(values);
    onSubmit();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="respondent_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Respondent Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select respondent type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="HEAD_OF_SCHOOL">Head of School</SelectItem>
                  <SelectItem value="TEACHER">Teacher</SelectItem>
                  <SelectItem value="ADMIN_STAFF">Administrative Staff</SelectItem>
                  <SelectItem value="IN_CHARGE_BLOCK">In-charge from Block/District</SelectItem>
                  <SelectItem value="IN_CHARGE_OTHER_SCHOOL">In-charge from Other School</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="respondent_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Respondent Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter respondent name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="respondent_mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter mobile number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="respondent_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter email address" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default RespondentForm;
