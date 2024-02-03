import { useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
