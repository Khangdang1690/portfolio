import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Medal } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const awards = [
  {
    title: "Nosu AI Hackathon Winner",
    description: "Recognized for creating Foicedetect, a deepfake voice detection system",
    prize: "$325",
    icon: Trophy
  },
  {
    title: "Google HackUSF Winner",
    description: "Won Moffitt AI in Healthcare track with SafeGuard, a fall detection and support system for elderly care",
    prize: "$200",
    icon: Trophy
  },
  {
    title: "USF Green & Gold Presidential Award",
    description: "Academic scholarship recognizing exceptional scholastic achievement",
    prize: null,
    icon: Award
  }
];

export default function AchievementsPage() {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <AnimatedBackground />
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="mb-12 text-center">
            <AnimatedText 
              text="Achievements"
              className="text-3xl md:text-5xl font-bold mb-4"
            />
            <AnimatedText 
              text="Awards, recognitions, and accomplishments throughout my academic and professional journey."
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.1 * (index + 1)}>
                  <Card className="bg-card/60 backdrop-blur-sm border-border h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{award.title}</CardTitle>
                        {award.prize && (
                          <CardDescription className="text-primary font-medium">
                            Prize: {award.prize}
                          </CardDescription>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{award.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection direction="up" delay={0.5}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Academic Excellence</h2>
              <Card className="bg-card/60 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Outstanding Academic Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Medal className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-primary/90 transition-colors">GPA: 4.0/4.0</h3>
                      <p className="text-muted-foreground">Maintaining perfect academic excellence throughout Computer Science curriculum</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Trophy className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-primary/90 transition-colors">USF Green & Gold Presidential Scholar</h3>
                      <p className="text-muted-foreground">Awarded for outstanding academic achievement and potential</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          <div>
            <h2 className="text-2xl font-bold mb-6">Technical Skills Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection direction="left" delay={0.7}>
                <Card className="bg-card/60 backdrop-blur-sm border-border h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">Backend Development</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Recognized for creating efficient, maintainable backend systems using modern architectures and best practices.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 group">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                        <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                          Reduced API response times by 45% at Finbud AI
                        </span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                        <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                          Optimized algorithms by 90% at Wisdom Robotics
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.8}>
                <Card className="bg-card/60 backdrop-blur-sm border-border h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">DevOps & Cloud</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Acknowledged for implementing efficient deployment pipelines and cloud infrastructure.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 group">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                        <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                          Increased deployment speed by 80% with Docker and AWS EC2
                        </span>
                      </li>
                      <li className="flex items-start gap-2 group">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                        <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                          Achieved 99.9% service availability through optimized cloud architecture
                        </span>
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