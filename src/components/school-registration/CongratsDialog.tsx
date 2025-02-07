
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CongratsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const CongratsDialog = ({ isOpen, onClose }: CongratsDialogProps) => {
  const navigate = useNavigate();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center space-y-6 py-8">
          <div className="flex items-center justify-center space-x-4 animate-bounce">
            <Trophy className="w-10 h-10 text-yellow-500" />
            <Award className="w-12 h-12 text-blue-500" />
            <Trophy className="w-10 h-10 text-yellow-500" />
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 animate-fade-in">
              Congratulations!
            </h2>
            <p className="text-gray-600 animate-fade-in">
              Your school has been successfully registered with SamarthX.
            </p>
            <div className="flex justify-center">
              <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col space-y-3 w-full animate-scale-in">
            <Button 
              onClick={() => navigate("/")}
              className="w-full"
            >
              Go to Dashboard
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CongratsDialog;
