import "./App.css";
import { useContext } from 'react';
import { ThemeContext } from './components/ThemeProvider';


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <h1>Meu aplicativo</h1>
      <button onClick={toggleTheme}>Alternar tema</button>
    </div>
  );
}

export default App;
