
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
import { SchoolFormData, ManagementGroup } from "@/types/school";

const formSchema = z.object({
  management_group: z.enum(["STATE_GOVT", "GOVT_AIDED", "PRIVATE_UNAIDED", "CENTRAL_GOVT", "OTHERS"] as const),
  management_code: z.string().min(1, "Management code is required"),
  nodal_ministry: z.string().optional(),
  administration_type: z.string().min(1, "Administration type is required"),
});

interface ManagementFormProps {
  data: Partial<SchoolFormData>;
  onUpdate: (data: Partial<SchoolFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ManagementForm = ({ data, onUpdate, onNext, onBack }: ManagementFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      management_group: data.management_group || "STATE_GOVT",
      management_code: data.management_code || "",
      nodal_ministry: data.nodal_ministry || "",
      administration_type: data.administration_type || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdate(values);
    onNext();
  };

  const managementGroup = form.watch("management_group");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="management_group"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Management Group</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select management group" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="STATE_GOVT">State Government</SelectItem>
                  <SelectItem value="GOVT_AIDED">Government Aided</SelectItem>
                  <SelectItem value="PRIVATE_UNAIDED">Private Unaided</SelectItem>
                  <SelectItem value="CENTRAL_GOVT">Central Government</SelectItem>
                  <SelectItem value="OTHERS">Others</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="management_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Management Code</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter management code" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {managementGroup === "CENTRAL_GOVT" && (
          <FormField
            control={form.control}
            name="nodal_ministry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nodal Ministry/Department</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter nodal ministry" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="administration_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Administration Type</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter administration type" />
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

export default ManagementForm;
