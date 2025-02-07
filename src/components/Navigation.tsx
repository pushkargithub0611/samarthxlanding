import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { BookOpen, Award, User, FileText, School, Menu, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "./ui/use-toast";
import { useEffect, useState } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      if (!currentSession && window.location.pathname !== '/auth') {
        navigate('/auth');
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, currentSession) => {
      setSession(currentSession);
      
      if (!currentSession) {
        // Clear any local state
        setSession(null);
        if (window.location.pathname !== '/auth') {
          navigate('/auth');
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut({ scope: 'local' });
      setSession(null);
      toast({
        title: "Logged out successfully",
      });
      navigate('/auth');
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/academics" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Academics</span>
            </Link>
            <Link to="/achievements" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <Award className="w-4 h-4" />
              <span>Achievements</span>
            </Link>
            <Link to="/documents" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <FileText className="w-4 h-4" />
              <span>Documents</span>
            </Link>
            {session && (
              <Link to="/schools" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                <School className="w-4 h-4" />
                <span>Schools</span>
              </Link>
            )}
            <Link to="/portal" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <User className="w-4 h-4" />
              <span>Student Portal</span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm text-secondary">{session?.user?.email}</span>
                </div>
                <Button onClick={handleLogout} variant="ghost">
                  Logout
                </Button>
                <Link to="/school-registration">
                  <Button className="bg-accent hover:bg-blue-500 text-white">
                    Register School
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost">
                    Login
                  </Button>
                </Link>
                <Button className="bg-accent hover:bg-blue-500 text-white">
                  Get Demo
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-gray-100">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                to="/academics"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                <BookOpen className="w-4 h-4" />
                <span>Academics</span>
              </Link>
              <Link 
                to="/achievements"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                <Award className="w-4 h-4" />
                <span>Achievements</span>
              </Link>
              <Link 
                to="/documents"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                <FileText className="w-4 h-4" />
                <span>Documents</span>
              </Link>
              {session && (
                <Link 
                  to="/schools"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors py-2"
                  onClick={toggleMenu}
                >
                  <School className="w-4 h-4" />
                  <span>Schools</span>
                </Link>
              )}
              <Link 
                to="/portal"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                <User className="w-4 h-4" />
                <span>Student Portal</span>
              </Link>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-100">
                {session ? (
                  <>
                    <div className="flex items-center gap-2 text-sm text-secondary py-2">
                      <User className="w-4 h-4" />
                      <span>{session?.user?.email}</span>
                    </div>
                    <Button 
                      onClick={() => {
                        handleLogout();
                        toggleMenu();
                      }} 
                      variant="ghost"
                      className="w-full justify-center mt-2"
                    >
                      Logout
                    </Button>
                    <Link to="/school-registration" onClick={toggleMenu} className="block mt-2">
                      <Button className="w-full bg-accent hover:bg-blue-500 text-white">
                        Register School
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={toggleMenu} className="block">
                      <Button variant="ghost" className="w-full justify-center">
                        Login
                      </Button>
                    </Link>
                    <Button className="w-full bg-accent hover:bg-blue-500 text-white mt-2">
                      Get Demo
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
