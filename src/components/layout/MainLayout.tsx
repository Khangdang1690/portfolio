import { Suspense } from "react";
import { MainNav } from "./MainNav";
import { PageTransition } from "../ui/PageTransition";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <PageTransition />
      </Suspense>
      <header className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-border">
        <MainNav />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Khang Dang. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/khangphuvinhdang/" 
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Khangdang1690" 
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="mailto:khangdang0199@gmail.com" 
              className="text-muted-foreground hover:text-primary"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 