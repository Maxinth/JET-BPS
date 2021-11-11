import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import store from './store/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import reportWebVitals from './reportWebVitals';
import 'react-credit-cards/es/styles-compiled.css'




ReactDOM.render(


  <Router>
    <Provider store={store} >
      <App />
    </Provider>
  </Router>


  ,
  document.getElementById('root')
);


reportWebVitals();
