
import { School } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="hover:opacity-80 transition-opacity">
      <div className="flex items-center gap-2">
        <School className="w-8 h-8 text-accent" />
        <span className="text-xl font-bold">
          <span className="bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
            Samarth
          </span>
          <span className="text-[#FF6F61]">X</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
