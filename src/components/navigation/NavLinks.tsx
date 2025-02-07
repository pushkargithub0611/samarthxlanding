
import { BookOpen, Award, FileText, School, User } from "lucide-react";
import { Link } from "react-router-dom";

interface NavLinksProps {
  session: any;
  isMobile?: boolean;
  onMobileClick?: () => void;
}

const NavLinks = ({ session, isMobile, onMobileClick }: NavLinksProps) => {
  const links = [
    {
      href: "/academics",
      icon: <BookOpen className="w-4 h-4" />,
      label: "Academics"
    },
    {
      href: "/achievements",
      icon: <Award className="w-4 h-4" />,
      label: "Achievements"
    },
    {
      href: "/documents",
      icon: <FileText className="w-4 h-4" />,
      label: "Documents"
    },
    ...(session ? [{
      href: "/schools",
      icon: <School className="w-4 h-4" />,
      label: "Schools"
    }] : []),
    {
      href: "/portal",
      icon: <User className="w-4 h-4" />,
      label: "Student Portal"
    }
  ];

  const baseClasses = "flex items-center gap-2 text-secondary hover:text-primary transition-colors";
  const mobileClasses = "py-2";

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={`${baseClasses} ${isMobile ? mobileClasses : ''}`}
          onClick={onMobileClick}
        >
          {link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
