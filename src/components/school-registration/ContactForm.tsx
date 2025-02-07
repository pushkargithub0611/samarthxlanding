
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
import { SchoolFormData } from "@/types/school";

const formSchema = z.object({
  std_code: z.string().optional(),
  landline_number: z.string().optional(),
  mobile_number: z.string().min(10, "Mobile number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  website: z.string().url("Invalid website URL").optional(),
});

interface ContactFormProps {
  data: Partial<SchoolFormData>;
  onUpdate: (data: Partial<SchoolFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ContactForm = ({ data, onUpdate, onNext, onBack }: ContactFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      std_code: data.std_code || "",
      landline_number: data.landline_number || "",
      mobile_number: data.mobile_number || "",
      email: data.email || "",
      website: data.website || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdate(values);
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="std_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>STD Code</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter STD code" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="landline_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Landline Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter landline number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile_number"
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
          name="email"
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

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter website URL" type="url" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
