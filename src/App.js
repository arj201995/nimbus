import { ThemeProvider } from '@emotion/react';
import { theme } from './utils/theme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';

import React, { Suspense } from "react";
import { routes } from './utils/routes';
import { Loader } from './components/Loader';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Suspense fallback={<Loader />} >
        <Routes>
          {
            routes.map((route, index) => <Route key={`${index}+${route.link}`} path={route.link} element={route.element} />)
          }
        </Routes>
      </Suspense>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
