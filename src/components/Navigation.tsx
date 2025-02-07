
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { BookOpen, Award, IndianRupee, User, FileText } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "./ui/use-toast";

const Navigation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({
        title: "Logged out successfully",
      });
      navigate('/');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        
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
          <Link to="/fees" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
            <IndianRupee className="w-4 h-4" />
            <span>Fees</span>
          </Link>
          <Link to="/portal" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
            <User className="w-4 h-4" />
            <span>Student Portal</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/auth">
            <Button variant="ghost">
              Login
            </Button>
          </Link>
          <Button onClick={handleLogout} variant="ghost">
            Logout
          </Button>
          <Link to="/school-registration">
            <Button className="bg-accent hover:bg-blue-500 text-white">
              Register School
            </Button>
          </Link>
          <Button className="bg-accent hover:bg-blue-500 text-white">
            Get Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
