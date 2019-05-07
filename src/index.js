import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/index.scss';
import App from './Components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { combineReducers, creat } from 'redux';
import {createStore} from 'redux';


const allReducers = combineReducers({
  
})

const store = createStore({
  
})


const router = (
  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>
)

ReactDOM.render( router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
