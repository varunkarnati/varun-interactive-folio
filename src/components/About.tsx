import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-2xl font-semibold">Education</h3>
                <p className="text-lg font-medium text-primary">B V Raju Institute of Technology</p>
                <p className="text-muted-foreground">Bachelor of Technology</p>
                <p className="text-muted-foreground">Computer Science and Business Systems</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                  <Calendar className="w-4 h-4" />
                  <span>Oct 2020 – Aug 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Hyderabad, India</span>
                </div>
                <p className="text-sm text-primary font-medium mt-2">CGPA: 7.77/10</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Relevant Coursework</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "NLP",
                  "Data Mining",
                  "Cloud Computing",
                  "Big Data Analytics",
                  "DBMS",
                  "Operating Systems"
                ].map((course) => (
                  <div 
                    key={course}
                    className="px-3 py-2 bg-secondary rounded-lg text-sm text-center hover:bg-primary/20 transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-gradient-card border-border/50 shadow-card">
          <h3 className="text-2xl font-semibold mb-4">Capstone Project</h3>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-primary font-medium">AI-Driven Intelligent Voice Ordering Platform</span> using LLMs and FastAPI
            — A sophisticated system leveraging large language models for natural voice interactions in food ordering scenarios.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
