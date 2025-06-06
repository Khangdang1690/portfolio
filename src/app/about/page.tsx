import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <AnimatedBackground />
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="mb-12 text-center">
            <AnimatedText 
              text="About Me"
              className="text-3xl md:text-5xl font-bold mb-4"
            />
            <AnimatedText 
              text="Backend Developer, DevOps Enthusiast, and CS Student at USF"
              className="text-xl text-muted-foreground"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold border-b border-primary pb-2">Background</h2>
                <p className="text-muted-foreground">
                  I&apos;m a sophomore at the University of South Florida pursuing a B.S. in Computer Science with a perfect GPA of 4.0. I&apos;m a recipient of the USF Green &amp; Gold Presidential Award.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold border-b border-primary pb-2">Interests</h2>
                <p className="text-muted-foreground">
                  My passion lies in backend development, cloud technologies, DevOps practices, and AI/ML. I enjoy building scalable, efficient systems and contributing to open-source projects.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold border-b border-primary pb-2">Goals</h2>
                <p className="text-muted-foreground">
                  I aim to become a software engineer specializing in backend and cloud infrastructure. I&apos;m continuously learning and applying new technologies, particularly in AI and machine learning domains.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="left" delay={0.4}>
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold">My Journey</h2>
              <p className="text-muted-foreground">
                I began my programming journey by exploring different technologies and platforms. Through coursework in Object-Oriented Programming, Data Structures &amp; Algorithms, Program Design, and Intro to Programming, I&apos;ve built a strong foundation in computer science principles.
              </p>
              <p className="text-muted-foreground">
                My professional experience includes contributing to Agno, a popular open-source AI library with 27.3k GitHub stars, where I fixed critical API compatibility issues. I&apos;ve also worked as a Backend Lead at Finbud (Microsoft-sponsored), developed AI systems at LAM²P Laboratory, and built APIs at Wisdom Robotics.
              </p>
              <p className="text-muted-foreground">
                I&apos;ve participated in multiple hackathons, winning the Nosu AI Hackathon ($325) with FoiceDetect and the Google Hackathon ($200) with SafeGuard. These experiences have strengthened my problem-solving abilities, collaborative skills, and passion for AI/ML applications.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.5}>
            <div className="bg-secondary/30 p-8 rounded-lg mb-12 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">University of South Florida</h3>
                <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
                <p className="text-muted-foreground">Expected May 2028</p>
                <p className="text-muted-foreground">GPA: 4.0/4.0</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Relevant Coursework</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center gap-2 hover:text-primary transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Object-Oriented Programming</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-primary transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Data Structures &amp; Algorithms</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-primary transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Program Design</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-primary transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Intro to Programming</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.6}>
            <div className="flex justify-center gap-4">
              <Button asChild className="group">
                <Link href="/projects">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/40 hover:border-primary">
                <Link href="/experience">
                  See My Experience
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </MainLayout>
  );
} 