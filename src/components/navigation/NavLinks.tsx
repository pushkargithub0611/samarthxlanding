
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
      icon: <BookOpen className="w-4 h-4" aria-hidden="true" />,
      label: "Academics",
      ariaLabel: "Navigate to academics section"
    },
    {
      href: "/achievements",
      icon: <Award className="w-4 h-4" aria-hidden="true" />,
      label: "Achievements",
      ariaLabel: "View achievements"
    },
    {
      href: "/documents",
      icon: <FileText className="w-4 h-4" aria-hidden="true" />,
      label: "Documents",
      ariaLabel: "Access documents"
    },
    ...(session ? [{
      href: "/schools",
      icon: <School className="w-4 h-4" aria-hidden="true" />,
      label: "Schools",
      ariaLabel: "Manage schools"
    }] : []),
    {
      href: "/portal",
      icon: <User className="w-4 h-4" aria-hidden="true" />,
      label: "Student Portal",
      ariaLabel: "Access student portal"
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
          aria-label={link.ariaLabel}
        >
          {link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
