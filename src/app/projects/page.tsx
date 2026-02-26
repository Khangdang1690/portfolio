import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const projects = [
  {
    title: "Nexus",
    description: "Real-time trading platform with WebSocket market data and quantitative trading strategies.",
    technologies: ["Next.js", "TypeScript", "Alpaca API", "WebSocket"],
    achievements: "Open-sourced multi-strategy quantitative trading system",
    link: "https://github.com/Khangdang1690/nexus",
    github: "https://github.com/Khangdang1690/nexus",
    details: [
      "Built a WebSocket gateway that connects to real-time market data using Alpaca API.",
      "Executed quantitative trading algorithm TheOmniscientParadox after a 68% win rate backtest.",
      "Architected a system that supports multiple trading strategies and open-sourced it."
    ]
  },
  {
    title: "Safe Guard",
    description: "Convolutional neural network for skin cancer classification with containerized deployment.",
    technologies: ["Docker", "Azure", "React.js", "Node.js", "Flask", "TensorFlow.js"],
    achievements: "Google Hackathon Winner · Medical AI diagnostic tool",
    link: "https://devpost.com/software/safeguard-oq572w",
    github: null,
    details: [
      "Built a convolutional neural network using TensorFlow for skin cancer classification, achieving 52% accuracy.",
      "Architected and deployed backend microservices with Flask, Express.js, and MongoDB via Docker.",
      "Automated deployments with Azure CI/CD pipelines, improving delivery speed by 187%."
    ]
  },
  {
    title: "Foicedetect",
    description: "Deepfake voice detection using SVM classifier on audio features.",
    technologies: ["Numpy", "Scikit-learn", "Librosa", "Django", "Next.js"],
    achievements: "Nosu AI Hackathon Winner",
    link: "https://devpost.com/software/foicedetect",
    github: null,
    details: [
      "Built deepfake voice detection model using SVM classifier on 100+ audio samples, achieving 94% accuracy.",
      "Developed the authentication and fake voice detection management for 80 users.",
      "Enabled real-time voice detection to present to 150+ audience at USF ACM AI Convention."
    ]
  }
];

export default function ProjectsPage() {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <AnimatedBackground />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="mb-12 text-center">
            <AnimatedText 
              text="Projects"
              className="text-3xl md:text-5xl font-bold mb-4"
            />
            <AnimatedText 
              text="A showcase of my technical projects, hackathon wins, and development work."
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={0.1 * (index + 1)}
              >
                <Card className="bg-card/60 backdrop-blur-sm border-border h-full flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:border-primary/30 hover:-translate-y-1">
                  <CardHeader className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-primary/60"></div>
                          <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">Project</span>
                        </div>
                        <CardTitle className="text-xl md:text-2xl group-hover:text-primary/90 transition-colors duration-300">{project.title}</CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-6">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <h3 className="font-medium mb-2 text-primary/90">Achievement</h3>
                      <p className="text-sm text-primary font-medium">{project.achievements}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3 flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary"></div>
                        Key Features
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 group/item">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <span className="group-hover/item:text-primary/80 transition-colors duration-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3 flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary"></div>
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="bg-secondary/70 text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-medium hover:scale-105 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3 justify-end mt-auto pt-6 border-t border-border/50">
                    {project.github && (
                      <Button asChild variant="outline" size="sm" className="hover:border-primary/70 group/btn">
                        <a 
                          href={project.github} 
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button asChild size="sm" className="group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md hover:shadow-lg">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          View Project
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 