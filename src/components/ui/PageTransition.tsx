"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function PageTransition() {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Reset the navigation state whenever the route changes
    setIsNavigating(false);
  }, [pathname, searchParams]);

  // Set up a global navigation start handler
  useEffect(() => {
    const handleNavigationStart = () => {
      setIsNavigating(true);
    };

    // You could listen to Next.js router events here if needed
    window.addEventListener("beforeunload", handleNavigationStart);
    
    return () => {
      window.removeEventListener("beforeunload", handleNavigationStart);
    };
  }, []);

  if (!isNavigating) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gradient-to-r from-primary to-accent animate-pulse">
      <div className="h-full bg-primary animate-[progressBar_2s_ease-in-out_infinite]"></div>
    </div>
  );
} 