"use client";

import { useEffect, useState, useRef } from "react";

export function HackingText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const iterationsRef = useRef(0);
  
  useEffect(() => {
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    
    // Start animation immediately and repeat it
    const startAnimation = () => {
      iterationsRef.current = 0;
      const maxIterations = 15;
      
      intervalRef.current = setInterval(() => {
        iterationsRef.current++;
        
        if (iterationsRef.current >= maxIterations) {
          clearInterval(intervalRef.current!);
          setDisplayText(text);
          
          // Restart the animation after a delay
          setTimeout(startAnimation, 5000);
          return;
        }
        
        // Generate a scrambled version
        const scrambled = text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          // Gradually fix characters as iterations progress
          if (iterationsRef.current / maxIterations > Math.random() && iterationsRef.current > maxIterations / 2) {
            return text[index];
          }
          // Otherwise return a random character
          return possibleChars[Math.floor(Math.random() * possibleChars.length)];
        }).join('');
        
        setDisplayText(scrambled);
      }, 50);
    };
    
    startAnimation();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text]);
  
  return (
    <span className="mr-2 mt-1">{displayText}</span>
  );
} 