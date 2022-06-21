import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import "./assets/css/style.css"

// Disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='dark' />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

