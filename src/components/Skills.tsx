import { Card } from "@/components/ui/card";
import { Code, Brain, Mic, Wrench, Cloud, Database as DatabaseIcon } from "lucide-react";

const skillCategories = [
  {
    title: "AI & LLMs",
    icon: Brain,
    skills: [
      "LangChain",
      "GPT-4 & LLMs",
      "RAG Systems",
      "Multi-Agent AI",
      "Prompt Engineering",
      "Fine-tuning",
      "Vector Databases",
      "Transformers",
      "Pinecone",
      "FAISS",
      "Chroma"
    ]
  },
  {
    title: "Voice AI",
    icon: Mic,
    skills: [
      "OpenAI Realtime API",
      "Whisper",
      "ElevenLabs",
      "WebRTC",
      "Speech Recognition",
      "TTS/STT",
      "Twilio"
    ]
  },
  {
    title: "Dev Stack",
    icon: Code,
    skills: [
      "Python",
      "TypeScript",
      "FastAPI",
      "React",
      "LangGraph",
      "WebSockets"
    ]
  },
  {
    title: "Backend & APIs",
    icon: Wrench,
    skills: [
      "REST APIs",
      "GraphQL",
      "WebRTC",
      "Async Processing",
      "Message Queues"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "Azure AKS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git"
    ]
  },
  {
    title: "Databases",
    icon: DatabaseIcon,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Vector DBs"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-secondary rounded-md text-sm hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
