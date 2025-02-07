
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
import { SchoolFormData, SchoolLocationType } from "@/types/school";

const formSchema = z.object({
  location_type: z.enum(["RURAL", "URBAN"] as const),
  revenue_block: z.string().optional(),
  village_name: z.string().optional(),
  gram_panchayat: z.string().optional(),
  urban_local_body: z.string().optional(),
  ward_name: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  pin_code: z.string().length(6, "PIN code must be 6 digits"),
});

interface LocationFormProps {
  data: Partial<SchoolFormData>;
  onUpdate: (data: Partial<SchoolFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const LocationForm = ({ data, onUpdate, onNext, onBack }: LocationFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location_type: data.location_type || "RURAL",
      revenue_block: data.revenue_block || "",
      village_name: data.village_name || "",
      gram_panchayat: data.gram_panchayat || "",
      urban_local_body: data.urban_local_body || "",
      ward_name: data.ward_name || "",
      address: data.address || "",
      pin_code: data.pin_code || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdate(values);
    onNext();
  };

  const locationType = form.watch("location_type");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="location_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Location Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="RURAL">Rural</SelectItem>
                  <SelectItem value="URBAN">Urban</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {locationType === "RURAL" && (
          <>
            <FormField
              control={form.control}
              name="revenue_block"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Revenue Block/CD Block (As Per LGD)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter revenue block" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="village_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Village Name (As Per LGD)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter village name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gram_panchayat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of Gram Panchayat (As Per LGD)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter gram panchayat" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {locationType === "URBAN" && (
          <>
            <FormField
              control={form.control}
              name="urban_local_body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Urban Local Bodies (As per LGD)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter urban local body" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ward_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ward Name (as per LGD)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter ward name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter school address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pin_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PIN Code</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter PIN code" maxLength={6} />
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

export default LocationForm;
