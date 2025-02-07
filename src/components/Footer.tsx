
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { School, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Academics",
      links: ["Admissions", "Curriculum", "Examinations", "CCE Results"],
    },
    {
      title: "Student Services",
      links: ["Scholarships", "Mid-day Meals", "Transfer Certificate", "Student Portal"],
    },
    {
      title: "Resources",
      links: ["UDISE Reports", "Academic Calendar", "Textbooks", "Help Center"],
    },
    {
      title: "Quick Links",
      links: [
        { name: "Ministry of Education", url: "https://www.education.gov.in/" },
        { name: "UDISE+", url: "https://udiseplus.gov.in/#/en/home" },
        { name: "School Login", url: "/login" },
        { name: "Contact", url: "/contact" }
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/70 mt-4">
              A comprehensive ERP solution for Indian schools under the Ministry of Education
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>123 Education Street, New Delhi</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span>contact@samarthx.edu.in</span>
              </div>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={typeof link === 'string' ? link : link.name}>
                    {typeof link === 'string' ? (
                      <Link
                        to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    ) : (
                      <a
                        href={link.url}
                        target={link.url.startsWith('http') ? "_blank" : undefined}
                        rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2024 SamarthX - Ministry of Education, Government of India
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/accessibility" className="text-white/70 hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
