import { useEffect, useState } from 'react';
/**
 * useScrolledDown custom react hook
 * @returns {boolean}
 */
const useScrolledDown = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const handleScroll = () => {
    setScrolledDown(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolledDown;
};

export default useScrolledDown;
