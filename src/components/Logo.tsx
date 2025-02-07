
import { School } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="hover:opacity-80 transition-opacity">
      <div className="flex items-center gap-2">
        <School className="w-8 h-8 text-accent" />
        <span className="text-xl font-bold bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
          SamarthX
        </span>
      </div>
    </Link>
  );
};

export default Logo;
