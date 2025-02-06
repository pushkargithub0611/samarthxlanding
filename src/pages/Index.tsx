import { Button } from "@/components/ui/button"
import { 
  School, 
  Users, 
  BookOpen, 
  Calendar, 
  Award, 
  UserCheck, 
  BookmarkCheck,
  GraduationCap,
  ClipboardCheck,
  MessagesSquare
} from "lucide-react"

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming School Management with
              <span className="text-purple-600"> SamarthX</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Comprehensive ERP solution for Indian schools under the Ministry of Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive School Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UDISE Compliance Section */}
      <section className="bg-purple-50 py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">UDISE+ Compliant</h2>
              <p className="text-gray-600 mb-6">
                Seamlessly integrate with UDISE+ for automated reporting and compliance with Ministry of Education standards.
              </p>
              <ul className="space-y-4">
                {[
                  "Automated UDISE+ report generation",
                  "Real-time data synchronization",
                  "Compliance monitoring dashboard",
                  "Error-free submissions"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <BookmarkCheck className="w-5 h-5 text-purple-600 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <School className="w-64 h-64 text-purple-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your School Management?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join hundreds of schools already using SamarthX for efficient administration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}