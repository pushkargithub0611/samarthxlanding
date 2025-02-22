
import { useState, useEffect } from 'react';
import { Volume2, ZoomIn, Accessibility, Eye } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const AccessibilityControls = () => {
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [colorMode, setColorMode] = useState<string>("default");
  const { toast } = useToast();
  const synth = window.speechSynthesis;

  useEffect(() => {
    // Apply zoom level
    document.body.style.zoom = `${zoomLevel}%`;
    return () => {
      document.body.style.zoom = '100%';
    };
  }, [zoomLevel]);

  useEffect(() => {
    // Apply color mode
    document.body.classList.remove('default-colors', 'deuteranopia', 'protanopia', 'tritanopia');
    if (colorMode !== 'default') {
      document.body.classList.add(colorMode);
    }
  }, [colorMode]);

  const handleVoiceToggle = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    toast({
      title: isVoiceEnabled ? "Voice hover disabled" : "Voice hover enabled",
      duration: 2000,
    });
  };

  const handleColorModeChange = (value: string) => {
    setColorMode(value);
    toast({
      title: `Color mode changed to ${value}`,
      duration: 2000,
    });
  };

  const increaseZoom = () => {
    if (zoomLevel < 150) {
      setZoomLevel(zoomLevel + 10);
      toast({
        title: `Zoom level: ${zoomLevel + 10}%`,
        duration: 2000,
      });
    }
  };

  const decreaseZoom = () => {
    if (zoomLevel > 100) {
      setZoomLevel(zoomLevel - 10);
      toast({
        title: `Zoom level: ${zoomLevel - 10}%`,
        duration: 2000,
      });
    }
  };

  useEffect(() => {
    if (isVoiceEnabled) {
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.textContent && !synth.speaking) {
          const utterance = new SpeechSynthesisUtterance(target.textContent);
          synth.speak(utterance);
        }
      };

      document.addEventListener('mouseover', handleMouseOver);
      return () => {
        document.removeEventListener('mouseover', handleMouseOver);
        synth.cancel();
      };
    }
  }, [isVoiceEnabled]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50"
          aria-label="Accessibility controls"
        >
          <Accessibility className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Accessibility Options</SheetTitle>
        </SheetHeader>
        <div className="py-4 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="h-5 w-5" />
              <span>Voice Hover</span>
            </div>
            <Switch
              checked={isVoiceEnabled}
              onCheckedChange={handleVoiceToggle}
              aria-label="Toggle voice hover"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ZoomIn className="h-5 w-5" />
              <span>Zoom Level: {zoomLevel}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={decreaseZoom}
                disabled={zoomLevel <= 100}
                variant="outline"
                aria-label="Decrease zoom"
              >
                -
              </Button>
              <Button
                onClick={increaseZoom}
                disabled={zoomLevel >= 150}
                variant="outline"
                aria-label="Increase zoom"
              >
                +
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              <span>Color Mode</span>
            </div>
            <Select value={colorMode} onValueChange={handleColorModeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select color mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="deuteranopia">Deuteranopia (Red-Green)</SelectItem>
                <SelectItem value="protanopia">Protanopia (Red-Green)</SelectItem>
                <SelectItem value="tritanopia">Tritanopia (Blue-Yellow)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AccessibilityControls;
