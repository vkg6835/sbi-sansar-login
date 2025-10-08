import { useState } from "react";
import { SBIHomepage } from "@/components/SBIHomepage";
import { LoginWelcome } from "@/components/LoginWelcome";
import { LoginUsername } from "@/components/LoginUsername";
import { LoginPassword } from "@/components/LoginPassword";
import { LoginSuccess } from "@/components/LoginSuccess";

type LoginStep = 'homepage' | 'welcome' | 'username' | 'password' | 'success' | 'dashboard';
type Language = 'en' | 'hi' | 'gu';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<LoginStep>('homepage');
  const [language, setLanguage] = useState<Language>('en');
  const [username, setUsername] = useState('');

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
  };

  const handleUsernameSubmit = (user: string) => {
    setUsername(user);
    setCurrentStep('password');
  };

  const handlePasswordSubmit = () => {
    setCurrentStep('success');
  };

  const handleProceedToDashboard = () => {
    setCurrentStep('dashboard');
  };

  if (currentStep === 'homepage') {
    return (
      <SBIHomepage 
        onLoginClick={() => setCurrentStep('welcome')}
        onLanguageChange={handleLanguageSelect}
        currentLanguage={language}
      />
    );
  }

  if (currentStep === 'welcome') {
    return (
      <LoginWelcome 
        onLanguageSelect={handleLanguageSelect}
        onProceed={() => setCurrentStep('username')}
        onBack={() => setCurrentStep('homepage')}
      />
    );
  }

  if (currentStep === 'username') {
    return (
      <LoginUsername 
        onBack={() => setCurrentStep('welcome')}
        onNext={handleUsernameSubmit}
        language={language}
      />
    );
  }

  if (currentStep === 'password') {
    return (
      <LoginPassword 
        onBack={() => setCurrentStep('username')}
        onNext={handlePasswordSubmit}
        username={username}
        language={language}
      />
    );
  }

  if (currentStep === 'success') {
    return (
      <LoginSuccess 
        username={username}
        language={language}
        onProceedToDashboard={handleProceedToDashboard}
      />
    );
  }

  // Dashboard placeholder
  const dashboardContent = {
    en: {
      title: 'Welcome to your Dashboard!',
      message: `Hello ${username}, you have successfully logged into OnlineSBI.`,
      back: 'Back to Homepage'
    },
    hi: {
      title: 'आपके डैशबोर्ड में स्वागत है!',
      message: `नमस्ते ${username}, आप सफलतापूर्वक OnlineSBI में लॉग इन हो गए हैं।`,
      back: 'मुखपृष्ठ पर वापस जाएं'
    },
    gu: {
      title: 'તમારા ડેશબોર્ડમાં સ્વાગત છે!',
      message: `નમસ્તે ${username}, તમે સફળતાપૂર્વક OnlineSBI માં લોગ ઇન થયા છો।`,
      back: 'હોમપેજ પર પાછા જાઓ'
    }
  };

  const dt = dashboardContent[language];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">
          {dt.title}
        </h1>
        <p className="text-muted-foreground">
          {dt.message}
        </p>
        <button 
          onClick={() => {
            setCurrentStep('homepage');
            setUsername('');
          }}
          className="text-primary hover:text-primary-dark underline"
        >
          {dt.back}
        </button>
      </div>
    </div>
  );
};

export default Index;
