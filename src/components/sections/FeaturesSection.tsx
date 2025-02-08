
import { 
  Users, 
  UserCheck, 
  BookOpen, 
  Award, 
  Calendar, 
  MessagesSquare 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Digital enrollment, attendance tracking, and performance monitoring",
    path: "/students"
  },
  {
    icon: UserCheck,
    title: "Teacher Management",
    description: "Registration, attendance, transfers, and professional development",
    path: "/teachers"
  },
  {
    icon: BookOpen,
    title: "Academic Management",
    description: "CCE results, supplementary teaching, and promotions",
    path: "/academics"
  },
  {
    icon: Award,
    title: "Incentives & Scholarships",
    description: "Track rewards, manage scholarships, and issue certificates",
    path: "/incentives"
  },
  {
    icon: Calendar,
    title: "Administrative Tools",
    description: "Leave management, UDISE reporting, and infrastructure tracking",
    path: "/admin"
  },
  {
    icon: MessagesSquare,
    title: "Communication Hub",
    description: "Mass messaging, helpdesk, and stakeholder engagement",
    path: "https://samarthx.du.ac.in/signin"
  }
];

const FeaturesSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFeatureClick = (path: string, title: string) => {
    if (path.startsWith('http')) {
      toast({
        title: "Redirecting",
        description: `Opening ${title} in a new tab...`,
        duration: 2000,
      });
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "Module Access",
        description: `Accessing ${title} module...`,
        duration: 2000,
      });
      navigate(path);
    }
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive School Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Button
              key={index}
              variant="outline"
              className="min-h-[200px] w-full h-auto p-6 border rounded-lg hover:shadow-lg transition-all flex flex-col items-start text-left space-y-4 overflow-hidden"
              onClick={() => handleFeatureClick(feature.path, feature.title)}
            >
              <feature.icon className="w-12 h-12 text-blue-500 shrink-0" />
              <div className="space-y-2 w-full">
                <h3 className="text-xl font-semibold line-clamp-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{feature.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

