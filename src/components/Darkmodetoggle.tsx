import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        fixed bottom-10 right-10 w-12 h-12 flex items-center justify-center 
        rounded-full bg-gray-300 dark:bg-gray-700 text-lg 
        transition-all duration-300 shadow-lg hover:scale-110
      `}
      style={{ zIndex: 99 }}
    >
      {isDarkMode ? '🌙' : '🌞'}
    </button>
  );
};

export default DarkModeToggle;
