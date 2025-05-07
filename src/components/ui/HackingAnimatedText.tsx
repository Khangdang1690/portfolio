"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

interface HackingAnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  intensity?: "low" | "medium" | "high";
}

export function HackingAnimatedText({ 
  text, 
  className, 
  once = true,
  intensity = "medium" 
}: HackingAnimatedTextProps) {
  const words = text.split(" ");
  const [effects, setEffects] = useState<{
    glitchWords: boolean[],
    glitchChars: {[key: number]: number[]},
    scrambledChars: {[key: string]: string},
    scanLine: number | null,
    scanLineHorizontal: boolean,
    noise: boolean,
    flicker: boolean,
    digitalArtifacts: boolean,
    glitchOffset: boolean,
    matrixEffect: number | null,
    nameColorEffect: number[]
  }>({
    glitchWords: words.map(() => false),
    glitchChars: {},
    scrambledChars: {},
    scanLine: null,
    scanLineHorizontal: false,
    noise: false,
    flicker: false,
    digitalArtifacts: false,
    glitchOffset: false,
    matrixEffect: null,
    nameColorEffect: []
  });
  const animationTimersRef = useRef<NodeJS.Timeout[]>([]);
  
  // Variants for container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  const getRandomCharacter = () => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/\\\'\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  useEffect(() => {
    // Create a ref copy for cleanup to avoid the React hooks warning
    const timersRef = animationTimersRef;
    
    // Create matrix-style scanning effect
    const runAnimationCycle = () => {
      // Set intensity multipliers
      const intensityFactors = {
        low: { duration: 6000, effectCount: 15, effectIntensity: 0.7 },
        medium: { duration: 4000, effectCount: 25, effectIntensity: 1 },
        high: { duration: 3000, effectCount: 40, effectIntensity: 1.3 }
      };
      
      const { duration, effectCount, effectIntensity } = intensityFactors[intensity];
      
      // 1. Random character highlight effect
      const randomCharHighlight = () => {
        const wordIdx = Math.floor(Math.random() * words.length);
        
        // Skip highlighting if the word is "Khang" or "Dang"
        if (words[wordIdx].toLowerCase() === "khang" || words[wordIdx].toLowerCase() === "dang") {
          return;
        }
        
        const charIndices: number[] = [];
        
        // Select 1-2 random characters in the word
        const numChars = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < numChars; i++) {
          const charIdx = Math.floor(Math.random() * words[wordIdx].length);
          if (!charIndices.includes(charIdx)) {
            charIndices.push(charIdx);
          }
        }
        
        setEffects(prev => ({
          ...prev,
          glitchChars: { ...prev.glitchChars, [wordIdx]: charIndices }
        }));
        
        // Clear after short time
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => ({
              ...prev,
              glitchChars: { ...prev.glitchChars, [wordIdx]: [] }
            }));
          }, 150 * effectIntensity)
        );
      };
      
      // 2. Word glitch effect
      const wordGlitch = () => {
        const wordIdx = Math.floor(Math.random() * words.length);
        
        // Skip glitching if the word is "Khang" or "Dang"
        if (words[wordIdx].toLowerCase() === "khang" || words[wordIdx].toLowerCase() === "dang") {
          return;
        }
        
        setEffects(prev => {
          const newGlitchWords = [...prev.glitchWords];
          newGlitchWords[wordIdx] = true;
          return { ...prev, glitchWords: newGlitchWords };
        });
        
        // Clear after short time
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => {
              const newGlitchWords = [...prev.glitchWords];
              newGlitchWords[wordIdx] = false;
              return { ...prev, glitchWords: newGlitchWords };
            });
          }, 100 * effectIntensity)
        );
      };
      
      // 3. Scan line effect
      const scanLine = () => {
        const isHorizontal = Math.random() > 0.5;
        setEffects(prev => ({ ...prev, scanLineHorizontal: isHorizontal }));
        
        // Start scan line 
        for (let i = 0; i < 10; i++) {
          timersRef.current.push(
            setTimeout(() => {
              setEffects(prev => ({ ...prev, scanLine: i }));
            }, i * 40 * effectIntensity)
          );
        }
        
        // Clear scan line
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => ({ ...prev, scanLine: null }));
          }, 400 * effectIntensity)
        );
      };
      
      // 4. Noise effect
      const noiseEffect = () => {
        setEffects(prev => ({ ...prev, noise: true }));
        
        // Clear after short time
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => ({ ...prev, noise: false }));
          }, 200 * effectIntensity)
        );
      };
      
      // 5. Flicker effect
      const flickerEffect = () => {
        setEffects(prev => ({ ...prev, flicker: true }));
        
        // Clear after very short time
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => ({ ...prev, flicker: false }));
          }, 50 * effectIntensity)
        );
        
        // Sometimes do double flicker
        if (Math.random() > 0.6) {
          timersRef.current.push(
            setTimeout(() => {
              setEffects(prev => ({ ...prev, flicker: true }));
              
              timersRef.current.push(
                setTimeout(() => {
                  setEffects(prev => ({ ...prev, flicker: false }));
                }, 50 * effectIntensity)
              );
            }, 100 * effectIntensity)
          );
        }
      };
      
      // 6. Character scrambling effect 
      const charScrambleEffect = () => {
        const wordIdx = Math.floor(Math.random() * words.length);
        
        // Skip scrambling if the word is "Khang" or "Dang"
        if (words[wordIdx].toLowerCase() === "khang" || words[wordIdx].toLowerCase() === "dang") {
          return;
        }
        
        const charIdx = Math.floor(Math.random() * words[wordIdx].length);
        const charKey = `${wordIdx}-${charIdx}`;
        const originalChar = words[wordIdx][charIdx];
        
        setEffects(prev => ({
          ...prev,
          scrambledChars: { 
            ...prev.scrambledChars, 
            [charKey]: getRandomCharacter() 
          }
        }));
        
        // Quickly return to original character
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => ({
              ...prev,
              scrambledChars: { 
                ...prev.scrambledChars, 
                [charKey]: originalChar 
              }
            }));
            
            // Sometimes do rapid flickering between characters
            if (Math.random() > 0.7) {
              for (let i = 0; i < 3; i++) {
                timersRef.current.push(
                  setTimeout(() => {
                    setEffects(prev => ({
                      ...prev,
                      scrambledChars: { 
                        ...prev.scrambledChars, 
                        [charKey]: i % 2 === 0 ? getRandomCharacter() : originalChar 
                      }
                    }));
                  }, (80 + i * 40) * effectIntensity)
                );
              }
            }
            
            // Finally clear the effect
            timersRef.current.push(
              setTimeout(() => {
                setEffects(prev => {
                  const newScrambled = { ...prev.scrambledChars };
                  delete newScrambled[charKey];
                  return { ...prev, scrambledChars: newScrambled };
                });
              }, 250 * effectIntensity)
            );
          }, 80 * effectIntensity)
        );
      };
      
      // 7. Digital artifacts
      const digitalArtifactsEffect = () => {
        setEffects(prev => ({ ...prev, digitalArtifacts: true }));
        
        // Clear after short time
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => ({ ...prev, digitalArtifacts: false }));
          }, 120 * effectIntensity)
        );
      };
      
      // 8. Glitch offset effect
      const glitchOffsetEffect = () => {
        setEffects(prev => ({ ...prev, glitchOffset: true }));
        
        // Clear after short time
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => ({ ...prev, glitchOffset: false }));
          }, 100 * effectIntensity)
        );
      };
      
      // 9. Matrix-style character drop
      const matrixEffect = () => {
        const wordIdx = Math.floor(Math.random() * words.length);
        
        // Skip matrix effect if the word is "Khang" or "Dang"
        if (words[wordIdx].toLowerCase() === "khang" || words[wordIdx].toLowerCase() === "dang") {
          return;
        }
        
        setEffects(prev => ({ ...prev, matrixEffect: wordIdx }));
        
        // Clear after short time
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => ({ ...prev, matrixEffect: null }));
          }, 600 * effectIntensity)
        );
      };
      
      // Add a special color effect specifically for "Khang Dang"
      const nameColorEffect = () => {
        // Find "Khang" and "Dang" in the words array
        const nameIndices: number[] = [];
        words.forEach((word, index) => {
          if (word.toLowerCase() === "khang" || word.toLowerCase() === "dang") {
            nameIndices.push(index);
          }
        });
        
        if (nameIndices.length === 0) return;
        
        // Apply color effect to these words without changing text
        setEffects(prev => ({
          ...prev,
          nameColorEffect: nameIndices
        }));
        
        // Clear after a short time
        timersRef.current.push(
          setTimeout(() => {
            setEffects(prev => ({
              ...prev,
              nameColorEffect: []
            }));
          }, 300 * effectIntensity)
        );
      };
      
      // Schedule random effects throughout the animation cycle
      for (let i = 0; i < effectCount; i++) {
        const delay = Math.random() * duration;
        const effectType = Math.floor(Math.random() * 10); // Changed from 9 to 10
        
        timersRef.current.push(
          setTimeout(() => {
            switch (effectType) {
              case 0: randomCharHighlight(); break;
              case 1: wordGlitch(); break;
              case 2: scanLine(); break;
              case 3: noiseEffect(); break;
              case 4: flickerEffect(); break;
              case 5: charScrambleEffect(); break;
              case 6: digitalArtifactsEffect(); break;
              case 7: glitchOffsetEffect(); break;
              case 8: matrixEffect(); break;
              case 9: nameColorEffect(); break; // New special effect for "Khang Dang"
            }
          }, delay)
        );
      }
      
      // Schedule next animation cycle
      timersRef.current.push(
        setTimeout(() => {
          runAnimationCycle();
        }, duration)
      );
    };
    
    // Start the animation
    runAnimationCycle();
    
    // Cleanup all timers on unmount
    return () => {
      timersRef.current.forEach(timer => {
        clearTimeout(timer);
      });
    };
  }, [words, intensity]);

  return (
    <motion.div
      className={cn(
        "overflow-hidden flex flex-wrap", 
        className,
        effects.flicker && "opacity-90",
        effects.noise && "after:content-[''] after:absolute after:inset-0 after:bg-noise after:opacity-20 after:pointer-events-none relative",
        effects.digitalArtifacts && "before:content-[''] before:absolute before:inset-0 before:bg-[url('/digital-artifact.svg')] before:bg-repeat before:opacity-20 before:pointer-events-none before:mix-blend-screen relative",
        effects.glitchOffset && "translate-x-[1px] translate-y-[1px]"
      )}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          className={cn(
            "mr-2 mt-1 relative",
            effects.glitchWords[wordIndex] && "text-primary transform -skew-x-12 translate-y-[1px]",
            effects.scanLine === wordIndex && effects.scanLineHorizontal && 
              "before:content-[''] before:absolute before:inset-0 before:h-[2px] before:bg-primary/40 before:w-full",
            effects.scanLine === wordIndex && !effects.scanLineHorizontal && 
              "before:content-[''] before:absolute before:inset-0 before:w-[2px] before:bg-primary/40 before:h-full",
            effects.matrixEffect === wordIndex && "animate-dropDown",
            effects.nameColorEffect.includes(wordIndex) && 
              "text-primary transition-colors duration-300 animate-pulse"
          )}
          variants={child}
          key={wordIndex}
        >
          {word.split('').map((char, charIndex) => {
            const isGlitching = effects.glitchChars[wordIndex]?.includes(charIndex);
            const charKey = `${wordIndex}-${charIndex}`;
            const displayChar = effects.scrambledChars[charKey] || char;
            
            return (
              <span 
                key={charIndex} 
                className={cn(
                  isGlitching && "text-primary relative inline-block",
                  isGlitching && "after:content-[''] after:absolute after:inset-0 after:bg-primary/20 after:w-full after:animate-pulse"
                )}
              >
                {displayChar}
              </span>
            );
          })}
        </motion.span>
      ))}
    </motion.div>
  );
} 