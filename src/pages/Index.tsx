import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";
import FloatingChatPrompt from "@/components/FloatingChatPrompt";
import CodeRain from "@/components/CodeRain";
import TechOrbs from "@/components/TechOrbs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <CodeRain />
      <TechOrbs />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <ChatBot />
      <FloatingChatPrompt />
    </div>
  );
};

export default Index;
