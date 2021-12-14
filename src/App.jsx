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
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import NotFound from "./pages/NotFound";


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
              <Route path='/hoteldetails/:id' element={<HotelDetails/>}/>
              <Route path='/hotelpayment/:id' element={<HotelPayment/>}/>
              <Route path='/hotelcongratulation/:id' element={<HotelCongratilations/>}/>
              <Route path='*' element={<NotFound/>}/>
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
