import React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';
import { BrowserRouter } from "react-router-dom";
    
    
const rootElement = document.getElementById("root")
    
render(
     <BrowserRouter>
      <App />
      </BrowserRouter>,
      rootElement
      );
    
  