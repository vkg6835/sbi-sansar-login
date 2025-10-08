import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Lock, Eye, EyeOff, AlertCircle, HelpCircle, Keyboard, Shield } from "lucide-react";
import sbiLogo from "@/assets/sbi-logo.png";
import securityBadge from "@/assets/security-badge.png";

interface LoginPasswordProps {
  onBack: () => void;
  onNext: () => void;
  username: string;
  language: 'en' | 'hi' | 'gu';
}

export const LoginPassword = ({ onBack, onNext, username, language }: LoginPasswordProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);

  const content = {
    en: {
      title: "Enter your Password",
      subtitle: "Step 2 of 3",
      welcome: `Welcome back, ${username}`,
      label: "Password",
      placeholder: "Enter your password",
      button: "Sign In",
      help: "Forgot Password?",
      virtualKeyboard: "Use Virtual Keyboard",
      errorEmpty: "Please enter your password",
      errorWeak: "Password must be at least 6 characters",
      securityNote: "Your connection is secured with 256-bit encryption",
      tips: "Security Tips:",
      tip1: "Never share your login details",
      tip2: "Always log out after banking"
    },
    hi: {
      title: "अपना पासवर्ड दर्ज करें",
      subtitle: "चरण 2 का 3",
      welcome: `वापस स्वागत है, ${username}`,
      label: "पासवर्ड",
      placeholder: "अपना पासवर्ड दर्ज करें",
      button: "साइन इन करें",
      help: "पासवर्ड भूल गए?",
      virtualKeyboard: "वर्चुअल कीबोर्ड का उपयोग करें",
      errorEmpty: "कृपया अपना पासवर्ड दर्ज करें",
      errorWeak: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए",
      securityNote: "आपका कनेक्शन 256-बिट एन्क्रिप्शन से सुरक्षित है",
      tips: "सुरक्षा सुझाव:",
      tip1: "अपनी लॉगिन जानकारी कभी साझा न करें",
      tip2: "बैंकिंग के बाद हमेशा लॉग आउट करें"
    },
    gu: {
      title: "તમારો પાસવર્ડ દાખલ કરો",
      subtitle: "પગલું 2 નું 3",
      welcome: `પાછા સ્વાગત છે, ${username}`,
      label: "પાસવર્ડ",
      placeholder: "તમારો પાસવર્ડ દાખલ કરો",
      button: "સાઇન ઇન કરો",
      help: "પાસવર્ડ ભૂલી ગયા?",
      virtualKeyboard: "વર્ચ્યુઅલ કીબોર્ડનો ઉપયોગ કરો",
      errorEmpty: "કૃપા કરીને તમારો પાસવર્ડ દાખલ કરો",
      errorWeak: "પાસવર્ડ ઓછામાં ઓછો 6 અક્ષરોનો હોવો જોઈએ",
      securityNote: "તમારું કનેક્શન 256-બીટ એન્ક્રિપ્શન સાથે સુરક્ષિત છે",
      tips: "સુરક્ષા ટીપ્સ:",
      tip1: "તમારી લોગિન વિગતો ક્યારેય શેર કરશો નહીં",
      tip2: "બેંકિંગ પછી હંમેશા લોગ આઉટ કરો"
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password.trim()) {
      setError(t.errorEmpty);
      return;
    }
    
    if (password.length < 6) {
      setError(t.errorWeak);
      return;
    }
    
    setError("");
    onNext();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg border-0 bg-card/95 backdrop-blur-sm">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <img src={sbiLogo} alt="SBI" className="h-8 w-auto" />
            <div className="w-8" />
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{t.subtitle}</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-muted rounded-full" />
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div className="bg-primary h-1 rounded-full w-2/3 transition-all duration-300" />
            </div>
          </div>

          {/* Welcome */}
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-foreground">{t.title}</h1>
            <p className="text-sm font-medium text-primary">{t.welcome}</p>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
            <img src={securityBadge} alt="Security" className="h-8 w-8" />
            <div className="text-left">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm font-medium text-success">Secure Connection</span>
              </div>
              <p className="text-xs text-success/80">{t.securityNote}</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                <Lock className="h-4 w-4" />
                {t.label}
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t.placeholder}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  className={`h-12 pr-10 ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  autoComplete="current-password"
                  autoFocus
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {error && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Virtual Keyboard */}
            <Button 
              type="button" 
              variant="bankingSecondary" 
              className="w-full"
              onClick={() => setShowVirtualKeyboard(!showVirtualKeyboard)}
            >
              <Keyboard className="h-4 w-4 mr-2" />
              {t.virtualKeyboard}
            </Button>

            <Button type="submit" variant="banking" size="lg" className="w-full h-12">
              {t.button}
            </Button>
          </form>

          {/* Security Tips */}
          <div className="space-y-2 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs font-medium text-muted-foreground">{t.tips}</p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• {t.tip1}</li>
              <li>• {t.tip2}</li>
            </ul>
          </div>

          {/* Help */}
          <div className="text-center pt-4 border-t border-border">
            <Button variant="ghost" className="text-sm text-primary hover:text-primary-dark">
              <HelpCircle className="h-4 w-4 mr-2" />
              {t.help}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};