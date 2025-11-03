import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Founding Team Member, Generative AI Engineer",
    company: "VOIS AI",
    period: "Apr 2025 – Present",
    location: "Remote",
    current: true,
    achievements: [
      "Built and deployed a scalable multi-channel Voice Agent Platform serving 10K+ daily users across web, mobile, and telephony",
      "Integrated OpenAI Realtime API, Gemini Live, and WebRTC for real-time, human-like AI conversations",
      "Developed speech pipelines using ElevenLabs, Whisper, and open-source TTS/STT models",
      "Architected end-to-end systems: Twilio call routing, ASR, LLM reasoning, and response guardrails",
      "Deployed and managed workloads on Azure Kubernetes Service (AKS) ensuring reliability and low latency",
      "Collaborated directly with founders to design product roadmap, infrastructure strategy, and DevOps practices"
    ]
  },
  {
    role: "Generative AI Engineer",
    company: "AGIE AI",
    period: "Oct 2024 – Apr 2025",
    location: "Remote",
    current: false,
    achievements: [
      "Developed a full-stack AI chatbot system using LangChain, RAG, Pinecone, FastAPI, and GPT-4",
      "Implemented multi-agent orchestration for modular reasoning, tool usage, and dynamic context management",
      "Built and deployed video AI agents using Tavus API for personalized user engagement",
      "Enhanced latency by 30% through response caching, async calls, and model optimization",
      "Led integration of external APIs, voice synthesis, and sentiment-aware response generation"
    ]
  },
  {
    role: "Generative AI Engineer Intern",
    company: "AGIE AI",
    period: "Aug 2024 – Oct 2024",
    location: "Remote",
    current: false,
    achievements: [
      "Supported development of conversational AI apps using GPT-3.5 and fine-tuned transformer models",
      "Implemented prototype RAG systems using vector databases like FAISS and Chroma",
      "Conducted research on Trustworthy AI, bias detection, and hallucination reduction techniques"
    ]
  },
  {
    role: "Freelance Generative AI Engineer",
    company: "Upwork",
    period: "Jan 2024 – May 2024",
    location: "Remote",
    current: false,
    achievements: [
      "Delivered 8+ AI solutions for international clients involving text generation, document Q&A, and chatbot automation",
      "Integrated GPT-based NLP models with client databases and CRM systems",
      "Optimized model inference with quantization and fine-tuning to reduce latency by 25%"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-glow hidden md:block"></div>

                <Card className={`p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className={`space-y-2 ${index % 2 !== 0 ? 'md:text-right md:ml-auto' : ''}`}>
                        <div className="flex items-center gap-2 flex-wrap">
                          {exp.current && (
                            <Badge className="bg-primary/20 text-primary border-primary/50">
                              Current
                            </Badge>
                          )}
                          <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                        </div>
                        <div className="flex items-center gap-2 text-lg font-semibold">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className={`space-y-2 text-muted-foreground ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`text-primary mt-1 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>•</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
