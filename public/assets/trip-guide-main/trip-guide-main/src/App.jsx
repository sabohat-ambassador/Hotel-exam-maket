import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import { useState } from 'react';
import { DarkTheme, LightTheme } from "./styled";
import Header from "./components/Header";

const App = () => {

  const [theme, toggleTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
}

export default App;
