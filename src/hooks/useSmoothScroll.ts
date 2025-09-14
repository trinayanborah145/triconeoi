import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Extend Locomotive Scroll types
declare module 'locomotive-scroll' {
  interface DeviceOptions {
    smooth?: boolean;
    breakpoint?: number;
  }

  interface LocomotiveScrollOptions {
    smartphone?: DeviceOptions;
    tablet?: DeviceOptions;
  }
}

// Extend Window interface to include LocomotiveScroll
declare global {
  interface Window {
    locoScroll: LocomotiveScroll | null;
  }
}

export const useSmoothScroll = () => {
  const locoScroll = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (!scrollContainer) return;

    // Initialize Locomotive Scroll
    // Create Locomotive Scroll instance with correct type definitions
    locoScroll.current = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      // These are the only properties that are properly typed in the current version
      // Additional properties can be added if needed, but they might require type assertions
      lerp: 0.1,
      multiplier: 0.5,
      // Use type assertion for any additional properties that should work at runtime
      ...({
        inertia: 0.8,
        getDirection: true,
        getSpeed: true
      } as any)
    });

    // Store locoScroll instance on window for debugging
    window.locoScroll = locoScroll.current;

    // Update ScrollTrigger when the scroll updates
    locoScroll.current.on('scroll', (args: any) => {
      if (args.scroll) {
        ScrollTrigger.update();
      }
    });

    // Tell ScrollTrigger to use these proxy methods for the scroll container
    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        if (locoScroll.current) {
          return arguments.length 
            ? locoScroll.current.scrollTo(value as number, { duration: 0, disableLerp: true })
            : (locoScroll.current as any).scroll.y;
        }
        return 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollContainer.style.transform ? 'transform' : 'fixed',
    });

    // Update Locomotive Scroll when window is resized
    const handleResize = () => {
      if (locoScroll.current) {
        locoScroll.current.update();
      }
    };

    // Add event listeners
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('load', handleResize);

    // Refresh ScrollTrigger and update scroll to ensure everything is in sync
    const updateOnFrame = () => {
      if (locoScroll.current) {
        locoScroll.current.update();
      }
      requestAnimationFrame(updateOnFrame);
    };
    
    const frameId = requestAnimationFrame(updateOnFrame);

    // Initial update
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      
      if (locoScroll.current) {
        locoScroll.current.destroy();
        locoScroll.current = null;
      }
      
      // Clean up GSAP ScrollTrigger
      ScrollTrigger.defaults({ scroller: window });
      ScrollTrigger.clearMatchMedia();
      ScrollTrigger.refresh();
      
      // Reset window scroll position
      window.scrollTo(0, 0);
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    };
  }, []);

  return locoScroll.current;
};
