import { ArrowRight, Check, ChevronDown, BookOpen, Users, Shield, BarChart } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
              Transforming School Management
              <br />
              <span className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent">
                across India
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
              SamarthX is a comprehensive ERP solution designed specifically for Indian schools,
              streamlining administration and enhancing educational governance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                Schedule Demo
              </button>
              <button className="px-6 py-3 glass rounded-full hover:bg-white/20 transition-colors flex items-center gap-2 justify-center">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-16">
            <div className="flex justify-center">
              <img
                src="https://antimetal.com/images/hero/preview.png"
                alt="SamarthX Platform Preview"
                className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">Comprehensive School Management Solution</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Academic Management",
                  description: "Streamline curriculum planning, attendance tracking, and performance analytics",
                  icon: BookOpen,
                },
                {
                  title: "Administrative Control",
                  description: "Efficient management of staff, resources, and institutional operations",
                  icon: Users,
                },
                {
                  title: "Secure Infrastructure",
                  description: "Bank-grade security for your institution's sensitive data",
                  icon: Shield,
                },
                {
                  title: "Analytics Dashboard",
                  description: "Real-time insights into school performance metrics",
                  icon: BarChart,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors"
                >
                  <div className="mb-4">
                    <feature.icon className="w-8 h-8 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How does SamarthX help with e-governance?",
                  answer: "SamarthX provides end-to-end digital solutions for school administration, including paperless workflows, digital record keeping, and automated compliance reporting.",
                },
                {
                  question: "Is SamarthX compliant with Indian education regulations?",
                  answer: "Yes, SamarthX is fully compliant with CBSE, ICSE, and state board requirements, and regularly updates to meet new regulatory standards.",
                },
                {
                  question: "How secure is our school's data?",
                  answer: "We implement bank-level encryption and follow strict data protection protocols to ensure your institution's data remains secure and private.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background/50"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-background/50">
                      <p className="text-secondary">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Ready to transform your school?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of schools across India that are already benefiting from SamarthX's comprehensive ERP solution.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Request Demo
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;