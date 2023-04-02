import { useEffect, useState } from 'react';

export const useIsInViewport = (elementId: string) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('scroll', () => {
        setIsInViewport(getIsInViewport(elementId));
      });
    }
  }, [elementId]);

  return isInViewport;
};

const getIsInViewport = (elementId: string): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const element = document.querySelector(elementId);

  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
