import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateFnsUtils from '@date-io/date-fns';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import theme from './styles/theme.styles'
import GlobalStyles from './styles/globalStyles.styles'
import { store } from './config/redux';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
            <ToastContainer />
          </ThemeProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
