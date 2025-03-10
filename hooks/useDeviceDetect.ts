import { useState, useEffect } from 'react';

interface DeviceDetectReturn {
  isMobile: boolean;
  isLoading: boolean;
}

export function useDeviceDetect(): DeviceDetectReturn {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Function to check if the device is mobile
    const checkMobile = () => {
      const userAgent = 
        typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      
      const mobile = Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      );
      
      // Also check screen width for responsive design
      const isSmallScreen = window.innerWidth < 768;
      
      setIsMobile(mobile || isSmallScreen);
      setIsLoading(false);
    };

    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return { isMobile, isLoading };
} 