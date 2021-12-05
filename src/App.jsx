import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import Hotels from "./pages/Hotels";
import HotelDetails from './pages/HotelDetails'
import HotelPayment from './pages/HotelPayment'
import { Suspense, useState } from 'react';
import { DarkTheme, LightTheme } from "./styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HotelCongratilations from "./pages/HotelCongratulations";


const App = () => {

  const [theme, toggleTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme == 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
          <Suspense fallback= "loading">
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/hotels' element={<Hotels/>}/>
              <Route path='/hoteldetails' element={<HotelDetails/>}/>
              <Route path='/hotelpayment' element={<HotelPayment/>}/>
              <Route path='/hotelcongratulation' element={<HotelCongratilations/>}/>
            </Routes>
            <Footer/>
            </Suspense>
          </BrowserRouter>

        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
}

export default App;
