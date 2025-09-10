import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  Menu
} from "lucide-react";
import sbiLogo from "@/assets/sbi-logo.png";
import heroBanking from "@/assets/hero-banking.png";

interface SBIHomepageProps {
  onLoginClick: () => void;
}

export const SBIHomepage = ({ onLoginClick }: SBIHomepageProps) => {
  return (
    <div className="min-h-screen bg-background">
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
              <div className="flex items-center space-x-1 text-background bg-primary px-3 py-1 rounded cursor-pointer">
                <Globe className="h-4 w-4" />
                <span>Language</span>
                <ChevronDown className="h-4 w-4" />
              </div>
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
            <a href="#" className="flex items-center space-x-2 whitespace-nowrap hover:text-primary-light transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a href="#" className="whitespace-nowrap hover:text-primary-light transition-colors">
              Products & Services
            </a>
            <a href="#" className="flex items-center space-x-2 whitespace-nowrap hover:text-primary-light transition-colors">
              <HelpCircle className="h-4 w-4" />
              <span>How Do I (Help)</span>
            </a>
            <a href="#" className="flex items-center space-x-2 whitespace-nowrap hover:text-primary-light transition-colors">
              <CreditCard className="h-4 w-4" />
              <span>Manage Debit Card E-Mandate</span>
            </a>
            <a href="#" className="flex items-center space-x-2 whitespace-nowrap hover:text-primary-light transition-colors">
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </a>
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

      {/* Security Guidelines */}
      <section className="py-12">
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