
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
import { Switch } from "@/components/ui/switch"
import { SchoolFormData, SchoolType, AffiliationBoard } from "@/types/school";

const formSchema = z.object({
  school_category_code: z.string().min(1, "School category is required"),
  lowest_class: z.number().min(1, "Lowest class must be at least 1"),
  highest_class: z.number().min(1, "Highest class must be at least 1"),
  has_pre_primary: z.boolean(),
  pre_primary_classes: z.number().optional(),
  streams_available: z.array(z.string()).optional(),
  school_type: z.enum(["BOYS", "GIRLS", "CO_EDUCATIONAL"] as const),
  affiliation_board: z.enum(["CBSE", "STATE_BOARD", "ICSE", "INTERNATIONAL_BOARD", "BOTH_CBSE_STATE", "MADARSA_BOARD", "SANSKRIT_BOARD", "MSRVSSB"] as const),
  state_board_name: z.string().optional(),
  affiliation_number: z.string().min(1, "Affiliation number is required"),
});

interface AcademicFormProps {
  data: Partial<SchoolFormData>;
  onUpdate: (data: Partial<SchoolFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const AcademicForm = ({ data, onUpdate, onNext, onBack }: AcademicFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      school_category_code: data.school_category_code || "",
      lowest_class: data.lowest_class || 1,
      highest_class: data.highest_class || 1,
      has_pre_primary: data.has_pre_primary || false,
      pre_primary_classes: data.pre_primary_classes || 0,
      streams_available: data.streams_available || [],
      school_type: data.school_type || "CO_EDUCATIONAL",
      affiliation_board: data.affiliation_board || "CBSE",
      state_board_name: data.state_board_name || "",
      affiliation_number: data.affiliation_number || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdate(values);
    onNext();
  };

  const hasPrePrimary = form.watch("has_pre_primary");
  const affiliationBoard = form.watch("affiliation_board");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="school_category_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Category Code</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter school category code" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="lowest_class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lowest Class</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="number" 
                    min="1"
                    onChange={e => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="highest_class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Highest Class</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="number" 
                    min="1"
                    onChange={e => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="has_pre_primary"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel>Has Pre-Primary Section</FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {hasPrePrimary && (
          <FormField
            control={form.control}
            name="pre_primary_classes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Pre-Primary Classes</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="number" 
                    min="0"
                    onChange={e => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="school_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select school type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="BOYS">Boys</SelectItem>
                  <SelectItem value="GIRLS">Girls</SelectItem>
                  <SelectItem value="CO_EDUCATIONAL">Co-Educational</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="affiliation_board"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Affiliation Board</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select affiliation board" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="CBSE">CBSE</SelectItem>
                  <SelectItem value="STATE_BOARD">State Board</SelectItem>
                  <SelectItem value="ICSE">ICSE</SelectItem>
                  <SelectItem value="INTERNATIONAL_BOARD">International Board</SelectItem>
                  <SelectItem value="BOTH_CBSE_STATE">Both CBSE and State Board</SelectItem>
                  <SelectItem value="MADARSA_BOARD">Madarsa Board</SelectItem>
                  <SelectItem value="SANSKRIT_BOARD">Sanskrit Board</SelectItem>
                  <SelectItem value="MSRVSSB">MSRVSSB</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {["STATE_BOARD", "MADARSA_BOARD", "SANSKRIT_BOARD"].includes(affiliationBoard) && (
          <FormField
            control={form.control}
            name="state_board_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Board Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter board name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="affiliation_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Affiliation Number</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter affiliation number" />
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

export default AcademicForm;
