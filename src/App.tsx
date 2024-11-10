import { useState, useEffect } from 'react';
import './App.css';
import Accordian from './components/Accordian';
import Chooseshiple from './components/Chooseshiple';
import Corousel from './components/Corousel';
import Herosection from './components/Herosection';
import ScrollToTop from './components/Scrolltotop';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} text-gray-900 dark:text-gray-100`}>
      <header className="p-4 flex justify-between items-center bg-[#6222CC] dark:bg-[#15072c]">
        <h1 className="text-xl font-bold">Shiplee</h1>
        
        {/* Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`w-12 h-12 flex items-center justify-center rounded-full 
                     shadow-lg hover:shadow-xl transition-shadow duration-300 
                     focus:outline-none `}
          style={{ backgroundColor: 'transparent' }}
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </header>

      <main className="dark:bg-[#15072c]">
        <Herosection />
        <Accordian darkMode={darkMode} />
        <Chooseshiple darkMode={darkMode} />
        <Corousel />
        <ScrollToTop darkMode={darkMode} />
      </main>
    </div>
  );
};

export default App;
