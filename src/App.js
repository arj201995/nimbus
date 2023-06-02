import { ThemeProvider } from '@emotion/react';
import { theme } from './utils/theme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';

import React, { Suspense } from "react";
import { routes } from './utils/routes';
import { Loader } from './components/Loader';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation()

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode='wait'>

          <Routes location={location} key={location.key}>
            {
              routes.map((route, index) => <Route key={`${index}+${route.link}`} path={route.link} element={route.element} />)
            }
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </ThemeProvider >
  );
}

export default App;
