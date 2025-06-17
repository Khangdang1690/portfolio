import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const experiences = [
  {
    title: "MLOps Engineer",
    company: "Moffitt Cancer Center",
    location: "Tampa, FL",
    period: "Incoming - Fall 2025",
    description: [
      "Incoming MLOps Engineer position focused on machine learning operations and data pipeline optimization for cancer research applications.",
      "Will be working on scalable ML infrastructure to support clinical research and patient care initiatives.",
      "Expected to contribute to AI/ML systems that advance cancer treatment and research methodologies."
    ],
    skills: ["MLOps", "Machine Learning", "Data Pipelines", "Healthcare AI", "Clinical Research"]
  },
  {
    title: "Backend Engineer",
    company: "NAUCode",
    location: "Remote",
    period: "May 2025 -- Present",
    description: [
      "Built 3 comprehensive internal tools to support the company management system, streamlining operations and improving workflow efficiency.",
      "Implemented clustering and load balancing for NestJS applications, achieving 2x RPS improvement and 3-4x reduction in median latency through multi-core CPU utilization.",
      "Optimized backend architecture using Node.js cluster module to enable parallel processing across multiple cores, significantly enhancing application performance and scalability."
    ],
    skills: ["NestJS", "Node.js", "Clustering", "Load Balancing", "Backend Architecture", "Performance Optimization", "Internal Tools"]
  },
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
      "Developed 100% of the RESTful APIs using Spring Boot to manage order processing, tracking, and notifications.",
      "Optimized the find-the-closest-driver algorithm by 90% (from O(n) to O(log n)) using MySQL indexing.",
      "Integrated JavaMail API for real-time notifications and conducted API testing using Postman."
    ],
    skills: ["Spring Boot", "MySQL", "JavaMail API", "RESTful API", "Postman", "Algorithm Optimization", "Java"]
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

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <AnimatedSection 
                  key={index} 
                  direction={index % 2 === 0 ? "left" : "right"} 
                  delay={0.15 * index}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute top-8 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-primary/70 border-4 border-background shadow-lg ${
                    index % 2 === 0 ? 'left-0 md:left-1/2 transform md:-translate-x-1/2' : 'left-0 md:left-1/2 transform md:-translate-x-1/2'
                  }`}>
                    <div className="absolute inset-1 rounded-full bg-primary/20 animate-pulse"></div>
                  </div>
                  
                  <div className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8 md:mr-8' : 'md:pl-8 md:ml-8'
                  }`}>
                    <Card className="bg-card/70 backdrop-blur-lg border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group hover:border-primary/30 hover:-translate-y-1">
                      <CardHeader className="space-y-3">
                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-3">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
                              <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">Position</span>
                            </div>
                            <CardTitle className="text-xl md:text-2xl group-hover:text-primary/90 transition-colors duration-300">{exp.title}</CardTitle>
                            <CardDescription className="text-primary font-medium flex items-center gap-2">
                              <div className="h-1 w-1 rounded-full bg-primary"></div>
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="text-sm text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-full border border-border/50">
                            <div className="font-medium">{exp.location}</div>
                            <div className="text-xs">{exp.period}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <ul className="space-y-3">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 group/item">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                                <span className="text-muted-foreground group-hover/item:text-primary/80 transition-colors duration-300 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Separator className="my-4 bg-gradient-to-r from-transparent via-border to-transparent" />
                          <div>
                            <h3 className="font-medium mb-3 flex items-center gap-2">
                              <div className="h-1 w-1 rounded-full bg-primary"></div>
                              Technologies & Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="bg-secondary/70 text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-medium hover:scale-105 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default border border-border/30"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
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