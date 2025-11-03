import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Varun Kumar Karnati
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              AI Engineer | Building Intelligence at Scale
            </p>
            <div className="flex items-center gap-2 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
                LLMs & Voice AI
              </span>
              <span className="px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
                Real-time Systems
              </span>
              <span className="px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
                Multi-Agent AI
              </span>
            </div>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Architecting intelligent systems that understand, reason, and respond in real-time.
            From LLM orchestration to voice AI platforms — building the future of human-AI interaction.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="default" 
              size="lg"
              className="gap-2 shadow-glow hover:shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="gap-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/varunkarnati" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="gap-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://www.linkedin.com/in/varun-kumar-karnati-44427a227" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:varunkarnati10@gmail.com" className="hover:text-primary transition-colors">
                varunkarnati10@gmail.com
              </a>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 8978496133</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
