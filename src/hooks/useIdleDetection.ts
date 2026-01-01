import { useState, useEffect, useCallback, useRef } from 'react';

interface UseIdleDetectionProps {
  timeout?: number; // milliseconds
  onIdle?: () => void;
  onActive?: () => void;
}

export function useIdleDetection({ 
  timeout = 3000, 
  onIdle, 
  onActive 
}: UseIdleDetectionProps = {}) {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isIdle) {
      setIsIdle(false);
      onActive?.();
    }

    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
      onIdle?.();
    }, timeout);
  }, [timeout, isIdle, onIdle, onActive]);

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    
    const handleActivity = () => resetTimer();

    events.forEach(event => {
      document.addEventListener(event, handleActivity, { passive: true });
    });

    // Start the timer initially
    resetTimer();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [resetTimer]);

  return { isIdle, resetTimer };
}
