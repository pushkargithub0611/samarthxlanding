import { 
  Users, 
  UserCheck, 
  BookOpen, 
  Award, 
  Calendar, 
  MessagesSquare 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Digital enrollment, attendance tracking, and performance monitoring"
  },
  {
    icon: UserCheck,
    title: "Teacher Management",
    description: "Registration, attendance, transfers, and professional development"
  },
  {
    icon: BookOpen,
    title: "Academic Management",
    description: "CCE results, supplementary teaching, and promotions"
  },
  {
    icon: Award,
    title: "Incentives & Scholarships",
    description: "Track rewards, manage scholarships, and issue certificates"
  },
  {
    icon: Calendar,
    title: "Administrative Tools",
    description: "Leave management, UDISE reporting, and infrastructure tracking"
  },
  {
    icon: MessagesSquare,
    title: "Communication Hub",
    description: "Mass messaging, helpdesk, and stakeholder engagement"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive School Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;