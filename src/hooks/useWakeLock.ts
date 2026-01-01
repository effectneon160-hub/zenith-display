import { useState, useEffect, useCallback, useRef } from 'react';

interface WakeLockState {
  isSupported: boolean;
  isActive: boolean;
  error: string | null;
}

export function useWakeLock() {
  const [state, setState] = useState<WakeLockState>({
    isSupported: false,
    isActive: false,
    error: null,
  });

  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  // Check for Wake Lock API support
  useEffect(() => {
    const isSupported = 'wakeLock' in navigator;
    setState(prev => ({ ...prev, isSupported }));
  }, []);

  // Request wake lock
  const requestWakeLock = useCallback(async () => {
    if (!('wakeLock' in navigator)) {
      setState(prev => ({ 
        ...prev, 
        error: 'Wake Lock API not supported',
        isActive: false 
      }));
      return false;
    }

    try {
      wakeLockRef.current = await navigator.wakeLock.request('screen');
      
      wakeLockRef.current.addEventListener('release', () => {
        setState(prev => ({ ...prev, isActive: false }));
      });

      setState(prev => ({ 
        ...prev, 
        isActive: true, 
        error: null 
      }));
      
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to acquire wake lock';
      setState(prev => ({ 
        ...prev, 
        error: errorMessage,
        isActive: false 
      }));
      return false;
    }
  }, []);

  // Release wake lock
  const releaseWakeLock = useCallback(async () => {
    if (wakeLockRef.current) {
      try {
        await wakeLockRef.current.release();
        wakeLockRef.current = null;
        setState(prev => ({ ...prev, isActive: false, error: null }));
        return true;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to release wake lock';
        setState(prev => ({ ...prev, error: errorMessage }));
        return false;
      }
    }
    return true;
  }, []);

  // Re-acquire wake lock on visibility change
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible' && state.isActive && !wakeLockRef.current) {
        await requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [state.isActive, requestWakeLock]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
      }
    };
  }, []);

  return {
    ...state,
    requestWakeLock,
    releaseWakeLock,
  };
}
