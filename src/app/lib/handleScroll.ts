// src/app/lib/handleScroll.ts

type scrollHandler = {
  sectionId: string;
  onClick?: () => void;
  duration?: number; // Duration in milliseconds (default: 2000ms = 2 seconds)
  offset?: number;   // Offset from top in pixels (default: 80px for navbar)
  easing?: 'ease-out' | 'ease-in' | 'ease-in-out' | 'ease';
};

// Easing functions for smooth animations
const easingFunctions = {
  'ease-out': (t: number): number => 1 - Math.pow(1 - t, 3),
  'ease-in': (t: number): number => t * t * t,
  'ease-in-out': (t: number): number => 
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  'ease': (t: number): number => 
    0.25 * (1 - Math.cos(t * Math.PI)) + 0.75 * t,
};

// Smooth scroll animation function
const smoothScrollTo = (
  targetY: number, 
  duration: number = 2000, 
  easing: keyof typeof easingFunctions = 'ease-out'
) => {
  const startY = window.pageYOffset;
  const difference = targetY - startY;
  const startTime = performance.now();
  
  // If already at target, don't animate
  if (Math.abs(difference) < 10) return;

  const easingFunction = easingFunctions[easing];

  const step = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easingFunction(progress);
    
    const currentY = startY + (difference * easedProgress);
    window.scrollTo(0, currentY);
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

// Main scroll handler with slow, smooth scrolling
const handleScroll = ({ 
  sectionId, 
  onClick, 
  duration = 2000,  // Default 2 seconds - much slower than before
  offset = 80,      // Default navbar offset
  easing = 'ease-out'
}: scrollHandler) => {
  // Get the target element
  const element = document.getElementById(sectionId);
  
  if (!element) {
    console.warn(`Element with id "${sectionId}" not found`);
    return;
  }

  // Calculate target position with offset
  const targetY = Math.max(0, element.offsetTop - offset);
  
  // Perform smooth scroll
  smoothScrollTo(targetY, duration, easing);

  // Execute additional onClick function if provided
  if (onClick) {
    onClick();
  }
};

// Additional utility functions
export const scrollUtils = {
  // Scroll to top of page
  toTop: (duration: number = 1500) => {
    smoothScrollTo(0, duration, 'ease-out');
  },

  // Scroll to bottom of page
  toBottom: (duration: number = 2000) => {
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    smoothScrollTo(maxY, duration, 'ease-out');
  },

  // Scroll by a specific amount
  by: (pixels: number, duration: number = 1000) => {
    const currentY = window.pageYOffset;
    const targetY = Math.max(0, currentY + pixels);
    smoothScrollTo(targetY, duration, 'ease-out');
  },

  // Check if element is in viewport
  isInView: (elementId: string): boolean => {
    const element = document.getElementById(elementId);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  },
};

export default handleScroll;