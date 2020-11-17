import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
let theme = createMuiTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

