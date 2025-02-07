
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
import { SchoolFormData, HosType } from "@/types/school";
import { Separator } from "@/components/ui/separator";
import { PhoneCall, Mail, Globe, Building2, UserCircle, Phone } from "lucide-react";

const formSchema = z.object({
  std_code: z.string().optional(),
  landline_number: z.string().optional(),
  mobile_number: z.string().min(10, "Mobile number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  website: z.string().url("Invalid website URL").optional(),
  hos_type: z.enum(["HEAD_MASTER", "ASST_HEAD_MASTER", "ACTING_HEAD_TEACHER", "IN_CHARGE_OTHER_SCHOOL", "IN_CHARGE_BLOCK_DISTRICT", "OTHERS"] as const, {
    required_error: "Please select a Head of School type",
  }),
  hos_name: z.string().min(1, "Head of School name is required"),
  hos_mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  hos_email: z.string().email("Invalid email address"),
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
      hos_type: data.hos_type || undefined,
      hos_name: data.hos_name || "",
      hos_mobile: data.hos_mobile || "",
      hos_email: data.hos_email || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdate(values);
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            School Contact Information
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="std_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>STD Code</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <PhoneCall className="w-4 h-4 mr-2 text-gray-500" />
                      <Input {...field} placeholder="Enter STD code" />
                    </div>
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
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-500" />
                      <Input {...field} placeholder="Enter landline number" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="mobile_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <PhoneCall className="w-4 h-4 mr-2 text-gray-500" />
                    <Input {...field} placeholder="Enter mobile number" />
                  </div>
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
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-500" />
                    <Input {...field} placeholder="Enter email address" type="email" />
                  </div>
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
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-gray-500" />
                    <Input {...field} placeholder="Enter website URL" type="url" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <UserCircle className="w-5 h-5" />
            Head of School Information
          </h3>

          <FormField
            control={form.control}
            name="hos_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Head of School Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select head of school type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="HEAD_MASTER">Head Master</SelectItem>
                    <SelectItem value="ASST_HEAD_MASTER">Assistant Head Master</SelectItem>
                    <SelectItem value="ACTING_HEAD_TEACHER">Acting Head Teacher</SelectItem>
                    <SelectItem value="IN_CHARGE_OTHER_SCHOOL">In-charge Other School</SelectItem>
                    <SelectItem value="IN_CHARGE_BLOCK_DISTRICT">In-charge Block/District</SelectItem>
                    <SelectItem value="OTHERS">Others</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hos_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Head of School Name</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <UserCircle className="w-4 h-4 mr-2 text-gray-500" />
                    <Input {...field} placeholder="Enter head of school name" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hos_mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Head of School Mobile</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <PhoneCall className="w-4 h-4 mr-2 text-gray-500" />
                    <Input {...field} placeholder="Enter head of school mobile number" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hos_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Head of School Email</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-500" />
                    <Input {...field} placeholder="Enter head of school email" type="email" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between pt-6">
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
