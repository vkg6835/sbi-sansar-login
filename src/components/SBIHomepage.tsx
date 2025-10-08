import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Home, 
  CreditCard, 
  HelpCircle, 
  Phone, 
  Shield, 
  CheckCircle, 
  XCircle,
  Globe,
  ChevronDown,
  Menu,
  MessageCircle,
  Mail,
  FileText,
  MapPin,
  Clock
} from "lucide-react";
import sbiLogo from "@/assets/sbi-logo.png";
import heroBanking from "@/assets/hero-banking.png";

interface SBIHomepageProps {
  onLoginClick: () => void;
  onLanguageChange?: (language: 'en' | 'hi' | 'gu') => void;
  currentLanguage?: 'en' | 'hi' | 'gu';
}

export const SBIHomepage = ({ onLoginClick, onLanguageChange, currentLanguage = 'en' }: SBIHomepageProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const content = {
    en: {
      home: "Home",
      products: "Products & Services",
      debitCard: "Manage Debit Card E-Mandate",
      help: "Help & Support",
      language: "Language"
    },
    hi: {
      home: "होम",
      products: "उत्पाद और सेवाएं",
      debitCard: "डेबिट कार्ड ई-मैंडेट प्रबंधित करें",
      help: "सहायता और समर्थन",
      language: "भाषा"
    },
    gu: {
      home: "હોમ",
      products: "ઉત્પાદનો અને સેવાઓ",
      debitCard: "ડેબિટ કાર્ડ ઈ-મેન્ડેટ મેનેજ કરો",
      help: "મદદ અને સપોર્ટ",
      language: "ભાષા"
    }
  };

  const t = content[currentLanguage];

  return (
    <div className="min-h-screen bg-background" id="home">
      {/* Top Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={sbiLogo} alt="SBI ONLINE" className="h-10 w-auto" />
              <span className="text-xl font-bold text-primary">ONLINE</span>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                🏠 SBI Home Loan
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                About OnlineSBI
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Forms
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Net Banking Branches
              </a>
              
              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center space-x-1 text-background bg-primary px-3 py-1 rounded cursor-pointer hover:bg-primary-dark transition-colors">
                    <Globe className="h-4 w-4" />
                    <span>{t.language}</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 bg-card border-border">
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => onLanguageChange?.('en')}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>English</span>
                      {currentLanguage === 'en' && <CheckCircle className="h-4 w-4 text-success" />}
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => onLanguageChange?.('hi')}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>हिंदी</span>
                      {currentLanguage === 'hi' && <CheckCircle className="h-4 w-4 text-success" />}
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => onLanguageChange?.('gu')}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>ગુજરાતી</span>
                      {currentLanguage === 'gu' && <CheckCircle className="h-4 w-4 text-success" />}
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 whitespace-nowrap hover:text-primary-light transition-colors">
              <Home className="h-4 w-4" />
              <span>{t.home}</span>
            </button>
            <button onClick={() => scrollToSection('products')} className="whitespace-nowrap hover:text-primary-light transition-colors">
              {t.products}
            </button>
            <button onClick={() => scrollToSection('debit-card')} className="flex items-center space-x-2 whitespace-nowrap hover:text-primary-light transition-colors">
              <CreditCard className="h-4 w-4" />
              <span>{t.debitCard}</span>
            </button>
            
            {/* Help & Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-primary-foreground hover:text-primary-light hover:bg-primary-dark/20 h-auto p-2">
                  <HelpCircle className="h-4 w-4" />
                  <span>{t.help}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border">
                <DropdownMenuLabel className="text-foreground">How can we help you?</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-accent">
                  <FileText className="h-4 w-4" />
                  <span>How Do I (Help)</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-accent">
                  <MessageCircle className="h-4 w-4" />
                  <span>Live Chat Support</span>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-foreground">Contact Us</DropdownMenuLabel>
                
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-accent">
                  <Phone className="h-4 w-4" />
                  <div>
                    <p className="font-medium">Customer Care</p>
                    <p className="text-xs text-muted-foreground">1800-425-3800</p>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-accent">
                  <Mail className="h-4 w-4" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-xs text-muted-foreground">support@sbi.co.in</p>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-accent">
                  <MapPin className="h-4 w-4" />
                  <span>Find Branch/ATM</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-accent">
                  <Clock className="h-4 w-4" />
                  <div>
                    <p className="font-medium">Service Hours</p>
                    <p className="text-xs text-muted-foreground">24/7 Online Support</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-light to-accent/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Personal Banking
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience secure and convenient banking with OnlineSBI. 
                Access your accounts, transfer money, pay bills, and manage 
                your finances with our enhanced digital platform.
              </p>
              
              {/* Login Card */}
              <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">CONTINUE TO LOGIN</h3>
                    <Shield className="h-5 w-5 text-success" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dear Customer, OTP based login is introduced for added security
                  </p>
                  <Button variant="banking" size="lg" className="w-full" onClick={onLoginClick}>
                    Login to Internet Banking
                  </Button>
                  
                  {/* Quick Links */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                    <a href="#" className="text-primary hover:text-primary-dark">RBI Limited Liability Policy</a>
                    <a href="#" className="text-primary hover:text-primary-dark">Privacy Statement</a>
                    <a href="#" className="text-primary hover:text-primary-dark">Disclosure</a>
                    <a href="#" className="text-primary hover:text-primary-dark">Terms & Conditions</a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img 
                src={heroBanking} 
                alt="Digital Banking Experience" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Terms Notice */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground text-center">
            By clicking on "Continue to Login" button, you agree to the Terms of Service (Terms & Conditions) of usage of Internet Banking of SBI.
          </p>
        </div>
      </section>

      {/* Products & Services Section */}
      <section id="products" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Products & Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Savings Account</h3>
              </div>
              <p className="text-muted-foreground">Open a savings account with attractive interest rates and zero balance options.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Home Loans</h3>
              </div>
              <p className="text-muted-foreground">Competitive interest rates and flexible repayment options for your dream home.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Credit Cards</h3>
              </div>
              <p className="text-muted-foreground">Discover a range of credit cards with exciting rewards and benefits.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Insurance</h3>
              </div>
              <p className="text-muted-foreground">Comprehensive insurance solutions for life, health, and property.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Fixed Deposits</h3>
              </div>
              <p className="text-muted-foreground">Secure your future with guaranteed returns on fixed deposits.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">International Banking</h3>
              </div>
              <p className="text-muted-foreground">Seamless international transactions and forex services.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Debit Card E-Mandate Section */}
      <section id="debit-card" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Manage Debit Card E-Mandate
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CreditCard className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What is Debit Card E-Mandate?</h3>
                    <p className="text-muted-foreground">
                      E-Mandate is a facility that allows you to authorize recurring payments directly from your account using your debit card. This secure service eliminates the need for physical mandate forms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Key Benefits</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>→ Hassle-free recurring payments</li>
                      <li>→ Secure and encrypted transactions</li>
                      <li>→ Easy modification and cancellation</li>
                      <li>→ Real-time updates and notifications</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="banking" size="lg" className="w-full" onClick={onLoginClick}>
                    Login to Manage E-Mandate
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Guidelines */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            FOR YOUR OWN SECURITY
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Always Do */}
            <Card className="p-6 border-success/20 bg-success/5">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="font-semibold text-success">ALWAYS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Keep your computer free of malware
              </p>
            </Card>

            <Card className="p-6 border-success/20 bg-success/5">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="font-semibold text-success">ALWAYS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Change your passwords periodically
              </p>
            </Card>

            {/* Never Do */}
            <Card className="p-6 border-destructive/20 bg-destructive/5">
              <div className="flex items-center space-x-3 mb-4">
                <XCircle className="h-6 w-6 text-destructive" />
                <span className="font-semibold text-destructive">NEVER</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Respond to any communication seeking your passwords
              </p>
            </Card>

            <Card className="p-6 border-destructive/20 bg-destructive/5">
              <div className="flex items-center space-x-3 mb-4">
                <XCircle className="h-6 w-6 text-destructive" />
                <span className="font-semibold text-destructive">NEVER</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Reveal your passwords or card details to anyone
              </p>
            </Card>
          </div>

          {/* Detailed Security Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Please ensure the following before logging into OnlineSBI
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>→ The URL in your browser address bar begins with "https"</li>
                <li>→ The address or status bar displays the padlock symbol</li>
                <li>→ Click the padlock to view and verify the security certificate</li>
                <li>→ (SSL is compatible for IE 7.0 and above, Mozilla Firefox 3.1 and above, Opera 9.5 and above, Safari 3.5 and above, Google Chrome)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Beware of Phishing attacks
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>→ Phishing is a fraudulent attempt, usually made through email, phone calls, SMS etc seeking your personal and confidential information.</p>
                <p>→ State Bank or any of its representative never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately on</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};