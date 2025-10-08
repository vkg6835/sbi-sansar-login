import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Shield, Clock } from "lucide-react";
import sbiLogo from "@/assets/sbi-logo.png";

interface LoginSuccessProps {
  username: string;
  language: 'en' | 'hi' | 'gu';
  onProceedToDashboard: () => void;
}

export const LoginSuccess = ({ username, language, onProceedToDashboard }: LoginSuccessProps) => {
  const content = {
    en: {
      title: "Login Successful!",
      subtitle: "Step 3 of 3",
      welcome: `Welcome to OnlineSBI, ${username}`,
      message: "You have successfully logged into your account",
      button: "Go to Dashboard",
      lastLogin: "Last login:",
      security: "Your session is secure",
      sessionTime: "Session timeout: 20 minutes",
      redirecting: "Redirecting automatically in 3 seconds..."
    },
    hi: {
      title: "लॉगिन सफल!",
      subtitle: "चरण 3 का 3",
      welcome: `OnlineSBI में स्वागत है, ${username}`,
      message: "आप सफलतापूर्वक अपने खाते में लॉग इन हो गए हैं",
      button: "डैशबोर्ड पर जाएं",
      lastLogin: "अंतिम लॉगिन:",
      security: "आपका सत्र सुरक्षित है",
      sessionTime: "सत्र समाप्ति: 20 मिनट",
      redirecting: "3 सेकंड में स्वचालित रूप से रीडायरेक्ट हो रहा है..."
    },
    gu: {
      title: "લોગિન સફળ!",
      subtitle: "પગલું 3 નું 3",
      welcome: `OnlineSBI માં સ્વાગત છે, ${username}`,
      message: "તમે સફળતાપૂર્વક તમારા ખાતામાં લોગ ઇન થયા છો",
      button: "ડેશબોર્ડ પર જાઓ",
      lastLogin: "છેલ્લું લોગિન:",
      security: "તમારું સત્ર સુરક્ષિત છે",
      sessionTime: "સત્ર સમાપ્તિ: 20 મિનિટ",
      redirecting: "3 સેકન્ડમાં આપોઆપ રીડાયરેક્ટ થઈ રહ્યું છે..."
    }
  };

  const t = content[language];

  // Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onProceedToDashboard();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onProceedToDashboard]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-success/10 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg border-0 bg-card/95 backdrop-blur-sm">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-center">
            <img src={sbiLogo} alt="SBI" className="h-8 w-auto" />
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{t.subtitle}</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-success rounded-full" />
                <div className="w-2 h-2 bg-success rounded-full" />
                <div className="w-2 h-2 bg-success rounded-full" />
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div className="bg-success h-1 rounded-full w-full transition-all duration-500" />
            </div>
          </div>

          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-success/20 rounded-full animate-ping" />
              <CheckCircle className="h-16 w-16 text-success relative" />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center space-y-3">
            <h1 className="text-xl font-semibold text-foreground">{t.title}</h1>
            <p className="text-lg font-medium text-success">{t.welcome}</p>
            <p className="text-sm text-muted-foreground">{t.message}</p>
          </div>

          {/* Security Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 p-3 bg-success/10 rounded-lg border border-success/20">
              <Shield className="h-5 w-5 text-success" />
              <span className="text-sm font-medium text-success">{t.security}</span>
            </div>

            <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground">
              <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                <span>{t.lastLogin}</span>
                <span>Today, 2:34 PM</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                <Clock className="h-3 w-3" />
                <span>{t.sessionTime}</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            variant="success" 
            size="lg" 
            className="w-full h-12"
            onClick={onProceedToDashboard}
          >
            {t.button}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>

          {/* Auto redirect note */}
          <p className="text-xs text-center text-muted-foreground">
            {t.redirecting}
          </p>
        </div>
      </Card>
    </div>
  );
};