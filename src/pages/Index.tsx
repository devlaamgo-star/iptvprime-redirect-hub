import { Shield, MapPin, Mail, MessageCircle, AlertTriangle, Globe, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(45 100% 55% / 0.08), transparent 60%)" }} />
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 80% 80%, hsl(200 80% 55% / 0.06), transparent 50%)" }} />

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
        {/* Logo / Brand */}
        <div className="animate-float">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-3 animate-pulse-glow">
            <Globe className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              IPTV<span className="text-primary">PRIME</span>.us
            </span>
          </div>
        </div>

        {/* Restricted Access */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2 text-destructive text-sm font-medium">
            <Lock className="w-4 h-4" />
            Access Restricted
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
            This Website is{" "}
          <span className="text-primary animate-shimmer" style={{ backgroundImage: "linear-gradient(90deg, hsl(199 100% 50%), hsl(199 80% 70%), hsl(199 100% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Unavailable
          </span>{" "}
            in Your Region
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            <strong>iptvprime.us</strong> is currently available only in the{" "}
            <span className="text-accent font-semibold">United States</span> and{" "}
            <span className="text-accent font-semibold">Canada</span>.
          </p>
        </div>

        {/* Geo info card */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4" style={{ boxShadow: "var(--glow-gold)" }}>
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <MapPin className="w-5 h-5" />
            Available Regions
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              🇺🇸 United States
            </span>
            <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              🇨🇦 Canada
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            If you believe this is an error or you are located in these regions, please contact us below.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/message"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-foreground font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="mailto:support@iptvprime.us"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-accent-foreground font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              support@iptvprime.us
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-destructive/5 border border-destructive/15 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-center gap-2 text-destructive font-semibold text-sm">
            <AlertTriangle className="w-4 h-4" />
            Important Legal Notice
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            <strong className="text-foreground">IPTV Prime does NOT sell, distribute, or promote any illegal content.</strong>{" "}
            We are a legitimate IPTV service provider. All content offered through our platform is legally licensed and authorized for distribution. 
            We strictly comply with all applicable laws and regulations regarding digital content distribution.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
            <Shield className="w-3.5 h-3.5" />
            100% Legal &amp; Compliant Service
          </div>
        </div>

        {/* Footer */}
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} IPTV Prime. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
