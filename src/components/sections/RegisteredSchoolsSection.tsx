
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { School, User, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { SchoolFormData } from '@/types/school';
import { useToast } from '@/components/ui/use-toast';

const RegisteredSchoolsSection = () => {
  const [schools, setSchools] = useState<SchoolFormData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const { data: schoolsData, error } = await supabase
          .from('schools')
          .select('*');

        if (error) throw error;

        setSchools(schoolsData || []);
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, [toast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (schools.length === 0) {
    return (
      <Card className="p-6 text-center">
        <School className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Schools Registered</h3>
        <p className="text-gray-600">You haven't registered any schools yet.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {schools.map((school) => (
        <Card key={school.udise_code} className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <School className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900">{school.school_name}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-gray-900">{school.address}</p>
                      <p className="text-gray-600">
                        {school.district}, PIN: {school.pin_code}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <p className="text-gray-900">{school.mobile_number}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <p className="text-gray-900">{school.email}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">{school.hos_name}</p>
                      <p className="text-gray-600">Head of School</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-gray-900">Classes {school.lowest_class} to {school.highest_class}</p>
                      <p className="text-gray-600">{school.affiliation_board}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RegisteredSchoolsSection;
