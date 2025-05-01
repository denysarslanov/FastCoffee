import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './core/store/store';
import { Provider } from 'react-redux';
import config from './core/config';

window.store = store

const windowRef = window

const Context = React.createContext(store)

for (let key in config.nav) {
  console.log(config.nav[key])
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App windowRef={windowRef}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

