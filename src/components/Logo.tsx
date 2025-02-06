import { School } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <School className="w-8 h-8 text-purple-600" />
      <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
        SamarthX
      </span>
    </div>
  );
};

export default Logo;