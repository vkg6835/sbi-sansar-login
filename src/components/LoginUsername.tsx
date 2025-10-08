import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, User, AlertCircle, HelpCircle } from "lucide-react";
import sbiLogo from "@/assets/sbi-logo.png";

interface LoginUsernameProps {
  onBack: () => void;
  onNext: (username: string) => void;
  language: 'en' | 'hi' | 'gu';
}

export const LoginUsername = ({ onBack, onNext, language }: LoginUsernameProps) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const content = {
    en: {
      title: "Enter your Username",
      subtitle: "Step 1 of 3",
      label: "SBI Internet Banking Username",
      placeholder: "Enter your username",
      button: "Continue",
      help: "Forgot Username?",
      errorEmpty: "Please enter your username",
      errorInvalid: "Username should be 8-30 characters long",
      helpText: "Your username is the ID you created during registration"
    },
    hi: {
      title: "अपना यूज़रनेम दर्ज करें",
      subtitle: "चरण 1 का 3",
      label: "SBI इंटरनेट बैंकिंग यूज़रनेम",
      placeholder: "अपना यूज़रनेम दर्ज करें",
      button: "जारी रखें",
      help: "यूज़रनेम भूल गए?",
      errorEmpty: "कृपया अपना यूज़रनेम दर्ज करें",
      errorInvalid: "यूज़रनेम 8-30 अक्षरों का होना चाहिए",
      helpText: "आपका यूज़रनेम वह ID है जो आपने रजिस्ट्रेशन के दौरान बनाई थी"
    },
    gu: {
      title: "તમારું યુઝરનેમ દાખલ કરો",
      subtitle: "પગલું 1 નું 3",
      label: "SBI ઇન્ટરનેટ બેંકિંગ યુઝરનેમ",
      placeholder: "તમારું યુઝરનેમ દાખલ કરો",
      button: "ચાલુ રાખો",
      help: "યુઝરનેમ ભૂલી ગયા?",
      errorEmpty: "કૃપા કરીને તમારું યુઝરનેમ દાખલ કરો",
      errorInvalid: "યુઝરનેમ 8-30 અક્ષરોનું હોવું જોઈએ",
      helpText: "તમારું યુઝરનેમ એ ID છે જે તમે નોંધણી દરમિયાન બનાવ્યું હતું"
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError(t.errorEmpty);
      return;
    }
    
    if (username.length < 8 || username.length > 30) {
      setError(t.errorInvalid);
      return;
    }
    
    setError("");
    onNext(username);
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
                <div className="w-2 h-2 bg-muted rounded-full" />
                <div className="w-2 h-2 bg-muted rounded-full" />
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div className="bg-primary h-1 rounded-full w-1/3 transition-all duration-300" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-foreground">{t.title}</h1>
            <p className="text-sm text-muted-foreground">{t.helpText}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4" />
                {t.label}
              </Label>
              <Input
                id="username"
                type="text"
                placeholder={t.placeholder}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError("");
                }}
                className={`h-12 ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                autoComplete="username"
                autoFocus
              />
              {error && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            <Button type="submit" variant="banking" size="lg" className="w-full h-12">
              {t.button}
            </Button>
          </form>

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