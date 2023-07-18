import React, { useState, useEffect } from 'react';

const ThemeToggler = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme={setTheme}}>Toggle Theme</button>
      {/* Place your component's content here */}
    </div>
  );
};

export default ThemeToggler;