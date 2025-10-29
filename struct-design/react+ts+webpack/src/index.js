import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/** polify babel core-js@3 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/stable';
/**cross brower */
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
