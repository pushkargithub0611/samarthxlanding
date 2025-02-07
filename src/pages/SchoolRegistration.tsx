import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import BasicInfoForm from "@/components/school-registration/BasicInfoForm";
import LocationForm from "@/components/school-registration/LocationForm";
import ContactForm from "@/components/school-registration/ContactForm";
import ManagementForm from "@/components/school-registration/ManagementForm";
import AcademicForm from "@/components/school-registration/AcademicForm";
import RespondentForm from "@/components/school-registration/RespondentForm";
import { SchoolFormData } from "@/types/school";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Logo from "@/components/Logo";
import { School, ArrowRight, ArrowLeft } from "lucide-react";

const TOTAL_STEPS = 6;

const STEP_TITLES = [
  "Basic Information",
  "Location Details",
  "Contact Information",
  "Management Details",
  "Academic Information",
  "Respondent Details"
];

const STEP_DESCRIPTIONS = [
  "Enter the basic details of your school",
  "Provide the location information",
  "Add contact details for communication",
  "Specify management and administration details",
  "Enter academic details and affiliations",
  "Add respondent information"
];

const SchoolRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<SchoolFormData>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const progress = (currentStep / TOTAL_STEPS) * 100;

  const updateFormData = (data: Partial<SchoolFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "You must be logged in to register a school"
        });
        return;
      }

      // Validate required fields before submission
      const requiredFields: Array<keyof SchoolFormData> = [
        'udise_code', 'school_name', 'district', 'udise_block', 'location_type', 
        'address', 'pin_code', 'mobile_number', 'email', 'hos_type', 'hos_name',
        'hos_mobile', 'hos_email', 'management_group', 'management_code',
        'administration_type', 'school_category_code', 'lowest_class',
        'highest_class', 'school_type', 'affiliation_board', 'affiliation_number',
        'respondent_type', 'respondent_name', 'respondent_mobile', 'respondent_email'
      ];

      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        toast({
          variant: "destructive",
          title: "Error",
          description: `Missing required fields: ${missingFields.join(', ')}`
        });
        return;
      }

      const schoolData = {
        ...formData,
        user_id: user.id
      } as SchoolFormData; // Type assertion since we validated required fields

      const { error } = await supabase
        .from('schools')
        .insert(schoolData);

      if (error) throw error;

      toast({
        title: "Success",
        description: "School registered successfully"
      });
      navigate("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="animate-float mb-8">
            <Logo />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <School className="w-6 h-6 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">School Registration</h1>
          </div>
          
          <div className="w-full max-w-md">
            <Progress value={progress} className="h-2 bg-gray-100" />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold text-gray-900">{STEP_TITLES[currentStep - 1]}</h2>
              <p className="text-sm text-gray-600 mt-1">{STEP_DESCRIPTIONS[currentStep - 1]}</p>
              <p className="text-sm text-blue-500 font-medium mt-2">
                Step {currentStep} of {TOTAL_STEPS}
              </p>
            </div>
          </div>
        </div>

        <Card className="p-8 shadow-lg bg-white/90 backdrop-blur-sm border border-blue-100">
          {currentStep === 1 && (
            <BasicInfoForm
              data={formData}
              onUpdate={updateFormData}
              onNext={handleNext}
            />
          )}
          {currentStep === 2 && (
            <LocationForm
              data={formData}
              onUpdate={updateFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 3 && (
            <ContactForm
              data={formData}
              onUpdate={updateFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 4 && (
            <ManagementForm
              data={formData}
              onUpdate={updateFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 5 && (
            <AcademicForm
              data={formData}
              onUpdate={updateFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {currentStep === 6 && (
            <RespondentForm
              data={formData}
              onUpdate={updateFormData}
              onSubmit={handleSubmit}
              onBack={handleBack}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default SchoolRegistration;
