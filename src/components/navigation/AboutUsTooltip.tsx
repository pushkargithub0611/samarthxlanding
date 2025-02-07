
import { Link } from "react-router-dom";

const AboutUsTooltip = () => {
  return (
    <a 
      href="/about" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors group relative ml-8"
    >
      <span className="animate-float">About Us</span>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-4 bg-white rounded-lg shadow-lg w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <p className="text-sm text-gray-600 leading-relaxed">
          <span className="font-bold bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent animate-pulse">
            SamarthX
          </span>{" "}
          is revolutionizing education management through innovative digital solutions. We empower schools with seamless administrative tools, fostering excellence in education across India.
        </p>
      </div>
    </a>
  );
};

export default AboutUsTooltip;
