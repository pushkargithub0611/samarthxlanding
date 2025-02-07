
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