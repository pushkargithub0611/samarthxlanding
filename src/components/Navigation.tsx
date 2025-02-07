
import { Button } from "./ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "./ui/use-toast";
import { useEffect, useState } from "react";
import NavLinks from "./navigation/NavLinks";
import AuthButtons from "./navigation/AuthButtons";
import AboutUsTooltip from "./navigation/AboutUsTooltip";
import MobileMenu from "./navigation/MobileMenu";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [session, setSession] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setIsInitialized(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, currentSession) => {
      setSession(currentSession);
      if (!currentSession && location.pathname !== '/auth' && location.pathname !== '/') {
        navigate('/auth');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, location.pathname]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      toast({
        title: "Logged out successfully",
      });
      navigate('/');
    } catch (error: any) {
      console.error("Logout error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to log out. Please try again.",
      });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (!isInitialized) {
    return null;
  }

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 h-20">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center" aria-label="Go to homepage">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <AboutUsTooltip />
              <NavLinks session={session} />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>

            <div className="hidden md:flex items-center space-x-4">
              <AuthButtons session={session} onLogout={handleLogout} />
            </div>
          </div>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen}
          session={session}
          onLogout={handleLogout}
          onMenuItemClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navigation;
