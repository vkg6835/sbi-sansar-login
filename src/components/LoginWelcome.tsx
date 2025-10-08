import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Shield, HelpCircle, ArrowLeft } from "lucide-react";
import sbiLogo from "@/assets/sbi-logo.png";

interface LoginWelcomeProps {
  onLanguageSelect: (language: 'en' | 'hi') => void;
  onProceed: () => void;
  onBack: () => void;
}

export const LoginWelcome = ({ onLanguageSelect, onProceed, onBack }: LoginWelcomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg border-0 bg-card/95 backdrop-blur-sm">
        <div className="space-y-6">
          {/* Header with Back Button */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <img 
              src={sbiLogo} 
              alt="State Bank of India" 
              className="h-8 w-auto object-contain"
            />
            <div className="w-8" />
          </div>

          <div className="text-center space-y-6">
            {/* Welcome Message */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                Welcome to OnlineSBI
              </h1>
              <p className="text-muted-foreground">
                Secure Internet Banking for your financial needs
              </p>
            </div>

            {/* Language Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span>Choose your preferred language</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="bankingSecondary" 
                  onClick={() => onLanguageSelect('en')}
                  className="h-12"
                >
                  English
                </Button>
                <Button 
                  variant="bankingSecondary" 
                  onClick={() => onLanguageSelect('hi')}
                  className="h-12"
                >
                  हिंदी
                </Button>
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 p-3 bg-success/10 rounded-lg border border-success/20">
              <Shield className="h-5 w-5 text-success" />
              <div className="text-left">
                <p className="text-sm font-medium text-success">Secure Banking</p>
                <p className="text-xs text-success/80">256-bit SSL encryption</p>
              </div>
            </div>

            {/* Continue Button */}
            <Button 
              variant="banking" 
              size="lg" 
              onClick={onProceed}
              className="w-full h-12"
            >
              Continue to Login
            </Button>

            {/* Help Section */}
            <div className="pt-4 border-t border-border">
              <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
                <HelpCircle className="h-4 w-4 mr-2" />
                Need help with login?
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};