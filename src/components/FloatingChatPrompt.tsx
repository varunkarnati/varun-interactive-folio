import { useState, useEffect } from "react";
import { Bot, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const FloatingChatPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show prompt after 3 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <Card className="fixed bottom-28 right-6 w-80 p-4 bg-gradient-card border-primary/50 shadow-glow z-40 animate-scale-in">
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 p-1 hover:bg-secondary rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary/20 rounded-lg animate-pulse">
          <Bot className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-1 text-primary">Ask me anything!</p>
          <p className="text-sm text-muted-foreground">
            I can answer questions about Varun's experience, projects, and skills. Try asking about his work at VOIS AI or his AI projects!
          </p>
        </div>
      </div>
    </Card>
  );
};

export default FloatingChatPrompt;
