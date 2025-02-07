
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

const TOTAL_STEPS = 6;

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20 pb-8">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center mb-8">
          <Logo />
          <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-4">School Registration</h1>
          <Progress value={progress} className="h-2 w-full max-w-md bg-gray-100" />
          <p className="text-sm text-gray-600 mt-2">
            Step {currentStep} of {TOTAL_STEPS}
          </p>
        </div>

        <Card className="p-6 shadow-lg bg-white/80 backdrop-blur-sm">
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
