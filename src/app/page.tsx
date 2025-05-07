import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HackingAnimatedText } from "@/components/ui/HackingAnimatedText";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section with animated background */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <AnimatedBackground />
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 max-w-6xl mx-auto relative z-10">
          {/* Left Content Area */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-6">
            <HackingAnimatedText 
              text="Khang Dang"
              className="text-4xl md:text-6xl font-bold leading-tight"
            />
            <AnimatedText 
              text="Backend Developer & DevOps Engineer"
              className="text-xl md:text-2xl text-muted-foreground"
            />
            
            <AnimatedSection
              delay={0.4}
            >
              <p className="text-xl text-muted-foreground max-w-2xl">
                Backend Developer focused on building fast, secure systems with expertise in cloud technologies.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="flex gap-4 flex-wrap md:justify-start justify-center mt-4">
                <Button asChild className="group">
                  <Link href="/projects" className="flex items-center">
                    View Projects 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 hover:border-primary">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8}>
              <div className="flex items-center gap-6 pt-4">
                <a 
                  href="https://github.com/Khangdang1690" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/khangphuvinhdang/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="mailto:khangdang0199@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Avatar Area */}
          <AnimatedSection delay={0.1} direction="right">
            <div className="mb-6 md:mb-0">
              <div className="relative inline-block">
                <Avatar className="size-40 md:size-56 lg:size-64 border-2 border-primary/30 shadow-lg shadow-primary/10 overflow-hidden">
                  <AvatarImage 
                    src="/Khang.png" 
                    alt="Khang Dang" 
                    className="object-cover" 
                  />
                  <AvatarFallback className="text-4xl md:text-5xl font-bold bg-secondary text-primary">KD</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full size-10 md:size-12 flex items-center justify-center shadow-lg">
                  <span className="text-xs md:text-sm font-medium">USF</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Skills &amp; Expertise</h2>
              <p className="text-muted-foreground">
                As a sophomore Computer Science student at the University of South Florida, I specialize in:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <li className="flex items-center gap-3 group">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="group-hover:text-primary transition-colors">Backend Development</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="group-hover:text-primary transition-colors">DevOps & CI/CD</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="group-hover:text-primary transition-colors">Cloud Architecture</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="group-hover:text-primary transition-colors">API Development</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="group-hover:text-primary transition-colors">Database Management</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="group-hover:text-primary transition-colors">System Architecture</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild variant="outline" className="group border-primary/40 hover:border-primary">
                  <Link href="/about" className="flex items-center">
                    Learn More About Me 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-secondary/30 p-8 rounded-lg border border-secondary/50 backdrop-blur-sm">
              <h3 className="text-xl font-medium mb-6 relative">
                Technical Skills
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium mb-2 text-primary/80">Languages & Libraries</p>
                  <p className="text-sm text-muted-foreground">C/C++, Java, Python, JavaScript/TypeScript, Numpy, Librosa, Scikit-learn, SQL, Pandas</p>
                </div>
                <div>
                  <p className="font-medium mb-2 text-primary/80">Developer Tools</p>
                  <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, Github, Prisma, Supabase, REST API, AWS, Figma, Docker, Postman, Azure</p>
                </div>
                <div>
                  <p className="font-medium mb-2 text-primary/80">Frameworks</p>
                  <p className="text-sm text-muted-foreground">Vue.js/NuxtJS, Next/React.js, Node.js/NestJS, Express.js, Spring, Spring Boot, Django, Flask</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </MainLayout>
  );
}
