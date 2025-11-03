import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Mic, Bot, Database, ShoppingCart, Calendar as CalendarIcon, Image as ImageIcon, Shirt } from "lucide-react";

const projects = [
  {
    title: "Multi-Channel Voice Agent Platform",
    company: "VOIS AI",
    icon: Mic,
    description: "Developed and deployed real-time conversational voice agents using FastAPI, LangChain, WebRTC, OpenAI Realtime API, ElevenLabs, and AKS. Enabled voice-based automation across industries with built-in safety guardrails.",
    tags: ["FastAPI", "LangChain", "WebRTC", "OpenAI", "ElevenLabs", "AKS"]
  },
  {
    title: "Agentic AI Workflow System",
    company: "AGIE AI",
    icon: Bot,
    description: "Created multi-agent orchestration for document analysis and customer support automation using GPT-4, LangGraph, and Pinecone. Improved query accuracy by 40%.",
    tags: ["GPT-4", "LangGraph", "Pinecone", "Multi-Agent"]
  },
  {
    title: "Voice Ordering System",
    company: "Gourmet Grove",
    icon: ShoppingCart,
    description: "Built a food ordering assistant leveraging FastAPI, Groq LLM, LangChain, WebSockets, and ElevenLabs for natural conversation flow and menu retrieval.",
    tags: ["FastAPI", "Groq", "LangChain", "WebSockets", "ElevenLabs"]
  },
  {
    title: "Voice Recognition using Embedding Vectors",
    icon: Mic,
    description: "Built an audio recognition model using speech embeddings and vector similarity search for identifying and matching voice patterns. Utilized Whisper, Librosa, and FAISS to encode and compare voice data efficiently, enabling fast speaker identification and voice-based authentication.",
    tags: ["Whisper", "Librosa", "FAISS", "Audio Processing"]
  },
  {
    title: "Image Offset Detection System",
    icon: ImageIcon,
    description: "Developed a computer vision pipeline to calculate spatial offsets between objects in images using OpenCV, NumPy, and contour-based localization. Implemented feature extraction and offset visualization to automate defect detection and alignment measurement.",
    tags: ["OpenCV", "NumPy", "Computer Vision", "Image Processing"]
  },
  {
    title: "Chatbot with SQL Querying",
    icon: Database,
    description: "Implemented an LLM-driven chatbot that translates natural language into SQL queries for database insights using GPT-3.5 + Google GenAI.",
    tags: ["GPT-3.5", "SQL", "NLP", "Google GenAI"]
  },
  {
    title: "AI Booking Assistant",
    icon: CalendarIcon,
    description: "Created ride/flight booking assistant with contextual reasoning, schedule parsing, and external API integration using LangChain.",
    tags: ["LangChain", "API Integration", "NLP"]
  },
  {
    title: "Wardrobe Classification System",
    icon: Shirt,
    description: "Designed CNN model in TensorFlow/Keras achieving 92% accuracy on 10-class apparel dataset.",
    tags: ["TensorFlow", "Keras", "CNN", "Computer Vision"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing expertise in AI, Voice Technologies, and Full-Stack Development
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.company && (
                        <p className="text-sm text-primary font-medium">{project.company}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="bg-secondary hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
