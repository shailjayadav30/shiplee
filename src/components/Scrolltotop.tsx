import { useState, useEffect } from 'react';

interface ScrollToTopProps {
  darkMode: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-2 right-10 w-12 h-12 flex items-center justify-center 
          ${darkMode ? 'bg-gray-800 text-white' : 'bg-black text-white'} 
          rounded-full hover:bg-opacity-80 transition-all duration-200
        `}
        style={{ zIndex: 99 }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
