import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const experiences = [
  {
    title: "Opensource Contributor",
    company: "Agno",
    location: "New York City, NY",
    period: "May 2025 -- Present",
    description: [
      "Fixed critical Gemini 2.0 Flash API compatibility bug in Agno framework (27.3k GitHub stars), enabling universal support across OpenAI, Meta, Anthropic, AWS, Azure, NVIDIA and 20+ LLM providers for data visualization tools.",
      "Developed comprehensive testing framework with 23 unit tests achieving 100% pass rate, implementing robust error handling and multi-format data validation for chart generation capabilities.",
      "Delivered production-ready open source contribution serving the fastest Agentic A.I library to 279,000+ users globally."
    ],
    skills: ["Python", "AI/ML", "LLM APIs", "OpenAI", "Meta", "Anthropic", "AWS", "Azure", "NVIDIA", "Unit Testing"]
  },
  {
    title: "Software Engineer - Backend Lead",
    company: "Finbud - Microsoft Sponsored $1000",
    location: "Chicago, IL",
    period: "Feb 2025 -- May 2025",
    description: [
      "Migrated backend from Node.js to NestJS, improving code maintainability by 60% and reducing API response times by 45% through modular architecture and optimized database queries.",
      "Set up a cron job for data scraping engine using AWS Lambda, eliminating third-party API costs by $41,976 annually.",
      "Orchestrated deployment pipeline with Docker containerization and AWS EC2 integration, resulting in 80% faster deployment cycles, 200% increased scaling capacity, and 99.9% service availability."
    ],
    skills: ["Node.js", "NestJS", "Docker", "AWS Lambda", "AWS EC2", "Cron Jobs", "Data Scraping"]
  },
  {
    title: "Application Developer & Researcher",
    company: "LAM²P Laboratory",
    location: "Tampa, FL",
    period: "Jan 2025 -- May 2025",
    description: [
      "Collaborate with PhDs student to develop an AI image classification system for visuals from 500+ research papers.",
      "Engineered efficient data extraction pipeline using BeautifulSoup, OpenAI API, and pdfminer, cutting processing time from 4 hours to 10 minutes and boosting throughput by 20x.",
      "Demonstrated technical capabilities with 97%+ accuracy in detecting hydrophobicity, supporting applications in medical surfaces and exploring commercialization opportunities across research institutions."
    ],
    skills: ["Python", "BeautifulSoup", "OpenAI API", "pdfminer", "AI Image Classification", "Data Extraction", "Machine Learning"]
  },
  {
    title: "Software Engineer - Backend Intern",
    company: "Wisdom Robotics",
    location: "Remote, Vietnam",
    period: "Oct 2024 -- Jan 2025",
    description: [
      "Developed 100% of the RESTful APIs using Express.js to manage order processing, tracking, and notifications.",
      "Optimized the find-the-closest-driver algorithm by 90% (from O(n) to O(log n)) using MongoDB indexing.",
      "Integrated Firebase Cloud Messaging (FCM) for real-time notifications and conducted API testing using Postman."
    ],
    skills: ["Express.js", "MongoDB", "Firebase Cloud Messaging", "RESTful API", "Postman", "Algorithm Optimization"]
  }
];

export default function ExperiencePage() {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <AnimatedBackground />
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="mb-12 text-center">
            <AnimatedText 
              text="Experience"
              className="text-3xl md:text-5xl font-bold mb-4"
            />
            <AnimatedText 
              text="My professional journey and work experience in software development."
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection 
                key={index} 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={0.15 * index}
              >
                <Card className="bg-card/60 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                      <div>
                        <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>{exp.location}</div>
                        <div>{exp.period}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 group">
                            <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Separator className="my-4" />
                      <div>
                        <h3 className="font-medium mb-2">Technologies & Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs hover:scale-105 hover:bg-primary/20 transition-all cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.6}>
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <Card className="bg-card/60 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <div>
                      <CardTitle className="text-xl">University of South Florida</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        Bachelor of Science in Computer Science
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div>Tampa, FL</div>
                      <div>Expected May 2028</div>
                      <div>GPA: 4.0/4.0</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Relevant Coursework</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-start gap-2 group">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                          <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">Object-Oriented Programming</span>
                        </div>
                        <div className="flex items-start gap-2 group">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                          <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">Data Structures & Algorithms</span>
                        </div>
                        <div className="flex items-start gap-2 group">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                          <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">Program Design</span>
                        </div>
                        <div className="flex items-start gap-2 group">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                          <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">Intro to Programming</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Awards</h3>
                      <div className="space-y-1">
                        <div className="flex items-start gap-2 group">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                          <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">Nosu AI Hackathon Winner - $325</span>
                        </div>
                        <div className="flex items-start gap-2 group">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                          <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">Google Hackathon Winner - $200</span>
                        </div>
                        <div className="flex items-start gap-2 group">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                          <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">USF Green & Gold Presidential Award</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.8}>
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Leadership</h2>
              <Card className="bg-card/60 backdrop-blur-sm border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <div>
                      <CardTitle className="text-xl">USF Association for Computing Machinery</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Sep 2024 - March 2025
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2 group">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 group-hover:scale-150 transition-transform"></div>
                    <span className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                      Automated the email sending (4 hours to 14 minutes) & professor data scraping using Python Outlook.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </MainLayout>
  );
} 