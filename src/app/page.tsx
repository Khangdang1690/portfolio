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
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
        <AnimatedBackground />
        <div className="flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
          {/* Left Content Area */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 sm:gap-4 md:gap-6 w-full">
            <HackingAnimatedText 
              text="Khang Dang"
              className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mt-4 md:mt-0"
            />
            <AnimatedText 
              text="Software Engineer & CS Student at USF"
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
            />
            
            <AnimatedSection
              delay={0.4}
            >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2 md:px-0">
                Building ETL pipelines, AI/ML systems, and full-stack applications. Nosu AI & Google Hackathon Winner. Contributing to open source (Agno, 34k+ stars).
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start mt-2 sm:mt-4">
                <Button asChild className="group text-sm sm:text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
                  <Link href="/projects" className="flex items-center">
                    View Projects 
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 hover:border-primary text-sm sm:text-base backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 group">
                  <Link href="/contact" className="flex items-center">
                    Get in Touch
                    <div className="ml-2 h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8}>
              <div className="flex items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
                <a 
                  href="https://github.com/Khangdang1690" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/khangphuvinhdang/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="https://leetcode.com/u/khangdang0199/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
                  </svg>
                  <span className="sr-only">LeetCode</span>
                </a>
                <a 
                  href="mailto:kaizerdang.work@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Avatar Area */}
          <AnimatedSection delay={0.1} direction="right">
            <div className="mb-0">
              <div className="relative inline-block">
                <Avatar className="size-32 sm:size-40 md:size-56 lg:size-64 border-2 border-primary/30 shadow-lg shadow-primary/10 overflow-hidden">
                  <AvatarImage 
                    src="/Khang.png" 
                    alt="Khang Dang" 
                    className="object-cover" 
                  />
                  <AvatarFallback className="text-3xl sm:text-4xl md:text-5xl font-bold bg-secondary text-primary">KD</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full size-8 sm:size-10 md:size-12 flex items-center justify-center shadow-lg">
                  <span className="text-xs md:text-sm font-medium">USF</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Skills &amp; Expertise</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                B.S. in Computer Science at USF (GPA 4.0). I work across full-stack, data pipelines, and ML:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-8">
                <li className="flex items-center gap-2 sm:gap-3 group">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="text-sm sm:text-base group-hover:text-primary transition-colors">ETL & Data Pipelines (dlthub, LanceDB)</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 group">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="text-sm sm:text-base group-hover:text-primary transition-colors">Full-Stack (React, Next.js, Node, FastAPI)</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 group">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="text-sm sm:text-base group-hover:text-primary transition-colors">Payments (Brex, Stripe)</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 group">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="text-sm sm:text-base group-hover:text-primary transition-colors">Machine Learning (PyTorch, TensorFlow, Scikit-learn)</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 group">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="text-sm sm:text-base group-hover:text-primary transition-colors">Databases (PostgreSQL, MongoDB, LanceDB)</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 group">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary group-hover:scale-150 transition-all duration-300"></div>
                  <span className="text-sm sm:text-base group-hover:text-primary transition-colors">DevOps & Cloud (Docker, AWS, Azure)</span>
                </li>
              </ul>
              <div className="pt-2 sm:pt-4">
                <Button asChild variant="outline" className="group border-primary/40 hover:border-primary text-sm sm:text-base">
                  <Link href="/about" className="flex items-center">
                    Learn More About Me 
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-secondary/30 p-4 sm:p-6 md:p-8 rounded-xl border border-secondary/50 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-500 group">
              <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 relative group-hover:text-primary/90 transition-colors">
                Technical Skills
                <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 w-0 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-3 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group/card">
                  <p className="font-medium mb-1 sm:mb-2 text-primary/80 text-sm sm:text-base group-hover/card:text-primary transition-colors">Languages</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">JavaScript/TypeScript, Python, C++, SQL</p>
                </div>
                <div className="p-3 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group/card">
                  <p className="font-medium mb-1 sm:mb-2 text-primary/80 text-sm sm:text-base group-hover/card:text-primary transition-colors">Frameworks</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">React.js, Next.js, Node.js, Express.js, NestJS, dlthub, FastAPI</p>
                </div>
                <div className="p-3 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group/card">
                  <p className="font-medium mb-1 sm:mb-2 text-primary/80 text-sm sm:text-base group-hover/card:text-primary transition-colors">Databases &amp; Tools</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">SQLite, PostgreSQL, MySQL, MongoDB, LanceDB, Docker, GitHub CI/CD, AWS, Azure</p>
                </div>
                <div className="p-3 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group/card">
                  <p className="font-medium mb-1 sm:mb-2 text-primary/80 text-sm sm:text-base group-hover/card:text-primary transition-colors">Machine Learning</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">PyTorch, TensorFlow, Scikit-learn, Numpy, Pandas</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </MainLayout>
  );
}
