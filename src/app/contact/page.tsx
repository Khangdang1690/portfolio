import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <AnimatedBackground />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="mb-12 text-center">
            <AnimatedText 
              text="Get in Touch"
              className="text-3xl md:text-5xl font-bold mb-4"
            />
            <AnimatedText 
              text="Feel free to reach out for opportunities, questions, or just to say hello!"
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <AnimatedSection direction="left">
              <Card className="bg-card/60 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Form</CardTitle>
                  <CardDescription>
                    Send me a message and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <div className="space-y-8">
              <AnimatedSection direction="right" delay={0.2}>
                <Card className="bg-card/60 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription>
                      Reach out directly through these channels.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">Email</h3>
                        <a 
                          href="mailto:kaizerdang.work@gmail.com" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          kaizerdang.work@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">Phone</h3>
                        <a 
                          href="tel:+17142242543" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (714) 224-2543
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">LinkedIn</h3>
                        <a 
                          href="https://www.linkedin.com/in/khangphuvinhdang/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          linkedin.com/in/khangphuvinhdang
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">GitHub</h3>
                        <a 
                          href="https://github.com/Khangdang1690" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          github.com/Khangdang1690
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.4}>
                <Card className="bg-card/60 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      I&apos;m currently open to:
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2 group">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                        <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">Full-time Software Engineering roles</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                        <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">Internship opportunities</span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                        <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">Collaboration on innovative projects</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 