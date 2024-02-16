import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './Frontend/UserPages/Login/Login';
import Registration from './Frontend/UserPages/Registration/Registration';
import Header from './Frontend/Components/Header/Header';
import Home from './Frontend/Pages/Home/Home';
import NotFound from './Frontend/Pages/NotFound/NotFound';
import Cart from './Frontend/Pages/Cart/Cart';
import { CartProvider } from './CartContext';
import 'aos/dist/aos.css';
import AOS from 'aos';
import CheckoutPage from './Frontend/Pages/CheckoutPage/CheckoutPage';
import Pricing from './Frontend/Pages/Pricing/Pricing';
import Products from './Frontend/Pages/Products/Products';
import ForgotPassword from './Frontend/UserPages/ForgottPassword/ForgotPassword';
import Contact from './Frontend/Pages/Contact/Contact';
import Welcome from './Frontend/Pages/Welcome/Welcome';
import Footer from './Frontend/Components/Footer/Footer';
import About from './Frontend/Pages/About/About';

AOS.init({
  duration: 800,
  once: false,
  mirror: false,
});

function useDarkModePreference() {
  return useMediaQuery('(prefers-color-scheme: dark)');
}

function App() {
  const prefersDarkMode = useDarkModePreference();
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    // Update dark mode state when system preference changes
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      text: {
        primary: darkMode ? '#fff' : '#3B3B3B',
      },
      primary: {
        main: '#1976D2',
      },
      secondary: {
        main: '#DC004E',
      },
      background: {
        default: darkMode ? '#121212' : '#ffffff',
        paper: darkMode ? '#1E1E1E' : '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline
        style={{
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: darkMode ? '#121212' : '#ffffff',
          },
        }}
      />
      <Router>
        <CartProvider>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
        <Route path="/firebase-react" element={<Home darkMode={darkMode} />} />
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/*" element={<NotFound darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/register" element={<Registration darkMode={darkMode} />} />
            <Route path="/login" element={<Login darkMode={darkMode} />} />
            <Route path="/cart" element={<Cart darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/products" element={<Products darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/forgot-passsword" element={<ForgotPassword darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/welcome" element={<Welcome darkMode={darkMode} />} />
          </Routes>
        </CartProvider>
        <Footer/>
      </Router>

    </ThemeProvider>
  );
}

export default App;
