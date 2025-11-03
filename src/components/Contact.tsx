import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Open to exciting opportunities in AI and Voice Technologies
        </p>

        <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:varunkarnati10@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">varunkarnati10@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 8978496133</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Connect Online</h3>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 h-auto py-4 border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com/varunkarnati" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">github.com/varunkarnati</p>
                    </div>
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 h-auto py-4 border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/varun-kumar-karnati-44427a227" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Connect professionally</p>
                    </div>
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-medium">Currently:</span> Open to full-time opportunities and consulting projects in Generative AI, Voice AI, and ML Engineering.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
