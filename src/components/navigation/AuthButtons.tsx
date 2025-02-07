
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface AuthButtonsProps {
  session: any;
  onLogout: () => void;
  isMobile?: boolean;
}

const AuthButtons = ({ session, onLogout, isMobile }: AuthButtonsProps) => {
  return (
    <>
      {session ? (
        <>
          <div className="flex items-center gap-2" role="status" aria-label="User email">
            <User className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm text-secondary">{session?.user?.email}</span>
          </div>
          <Button 
            onClick={onLogout} 
            variant="ghost"
            className={isMobile ? "w-full justify-center mt-2" : ""}
            aria-label="Log out of your account"
          >
            Logout
          </Button>
          <Link to="/school-registration" className={isMobile ? "block mt-2" : ""}>
            <Button 
              className={`bg-accent hover:bg-blue-500 text-white whitespace-nowrap ${isMobile ? "w-full" : ""}`}
              aria-label="Register a new school"
            >
              Register School
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/auth" className={isMobile ? "block" : ""}>
            <Button 
              variant="ghost" 
              className={isMobile ? "w-full justify-center" : "px-6"}
              aria-label="Log in to your account"
            >
              Login
            </Button>
          </Link>
          <Button 
            className={`bg-accent hover:bg-blue-500 text-white whitespace-nowrap ${isMobile ? "w-full mt-2" : ""}`}
            aria-label="Request a demo"
          >
            Get Demo
          </Button>
        </>
      )}
    </>
  );
};

export default AuthButtons;
