import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const projects = [
  {
    title: "Sign1o",
    description: "CNN model for sign language recognition with real-time processing capabilities.",
    technologies: ["Prisma", "PostgreSQL", "NestJS", "Next.js", "Shadcn", "FastAPI", "PyTorch", "Google Gemini"],
    achievements: "AI-powered sign language recognition system",
    link: "https://devpost.com/software/sign1o",
    github: null,
    details: [
      "Built a CNN model (Python, TensorFlow) for sign language recognition, achieving 90%+ accuracy on 100+ video samples with a pipeline for 5% quarterly accuracy gains.",
      "Enhanced a NestJS backend service using Prisma ORM with a PostgreSQL database by integrating Prisma Accelerate; reduced query latency by 70% and connected backend with frontend using WebSockets to serve 50+ signs."
    ]
  },
  {
    title: "SafeGuard",
    description: "Convolutional neural network for skin cancer classification with containerized deployment.",
    technologies: ["Docker", "Azure", "React.js", "Node.js", "Flask", "TensorFlow.js"],
    achievements: "Medical AI diagnostic tool",
    link: "https://devpost.com/software/safeguard-oq572w",
    github: null,
    details: [
      "Built a convolutional neural network using TensorFlow for skin cancer classification, achieving 52% accuracy.",
      "Architected and deployed backend microservices with Flask, Express.js, and MongoDB, containerized via Docker, and automated deployments with Azure CI/CD pipelines, improving delivery speed and system reliability by 187%."
    ]
  },
  {
    title: "FoiceDetect",
    description: "Deepfake voice detection model using SVM classifier with high accuracy detection.",
    technologies: ["NumPy", "Scikit-learn", "Librosa", "Django", "Next.js"],
    achievements: "Nosu AI Hackathon Winner - $325",
    link: "https://devpost.com/software/foicedetect",
    github: null,
    details: [
      "Built deepfake voice detection model using SVM classifier on 100+ audio samples, achieving 94% accuracy.",
      "Enabled real-time voice detection to present to 150+ AI professionals at USF ACM AI Convention."
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={0.1 * (index + 1)}
              >
                <Card className="bg-card/60 backdrop-blur-sm border-border h-full flex flex-col hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Achievement</h3>
                        <p className="text-sm text-primary font-medium">{project.achievements}</p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Key Features</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {project.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 group">
                              <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                              <span className="group-hover:text-primary/80 transition-colors">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs hover:scale-105 hover:bg-primary/20 transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4 justify-end mt-auto">
                    {project.github && (
                      <Button asChild variant="outline" size="sm" className="hover:border-primary/70">
                        <a 
                          href={project.github} 
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button asChild size="sm" className="group">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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