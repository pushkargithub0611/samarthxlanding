
import { Button } from "../ui/button";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

interface MobileMenuProps {
  isOpen: boolean;
  session: any;
  onLogout: () => void;
  onMenuItemClick: () => void;
}

const MobileMenu = ({ isOpen, session, onLogout, onMenuItemClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="md:hidden py-4 bg-white border-t border-gray-100"
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <div className="flex flex-col space-y-4 px-4">
        <a 
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors py-2"
          onClick={onMenuItemClick}
          aria-label="About Us - Opens in new tab"
        >
          <span>About Us</span>
        </a>
        <NavLinks 
          session={session} 
          isMobile={true}
          onMobileClick={onMenuItemClick}
        />
        <div className="pt-4 border-t border-gray-100">
          <AuthButtons 
            session={session} 
            onLogout={() => {
              onLogout();
              onMenuItemClick();
            }}
            isMobile={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
