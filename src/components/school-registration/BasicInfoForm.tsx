
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
  udise_code: z.string().min(1, "UDISE Code is required"),
  school_name: z.string().min(1, "School name is required").toUpperCase(),
  district: z.string().min(1, "District is required"),
  udise_block: z.string().min(1, "UDISE+ Block is required"),
});

interface BasicInfoFormProps {
  data: Partial<SchoolFormData>;
  onUpdate: (data: Partial<SchoolFormData>) => void;
  onNext: () => void;
}

const BasicInfoForm = ({ data, onUpdate, onNext }: BasicInfoFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      udise_code: data.udise_code || "",
      school_name: data.school_name || "",
      district: data.district || "",
      udise_block: data.udise_block || "",
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
          name="udise_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UDISE Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter UDISE Code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="school_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Name (In capital letters)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter school name" 
                  {...field} 
                  onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the District</FormLabel>
              <FormControl>
                <Input placeholder="Enter district name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="udise_block"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the UDISE+ Block</FormLabel>
              <FormControl>
                <Input placeholder="Enter UDISE+ Block" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};

export default BasicInfoForm;
