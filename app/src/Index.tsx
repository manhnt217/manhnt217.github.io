// noinspection JSCheckFunctionSignatures,JSUnusedGlobalSymbols,ES6CheckImport

// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';

// Alternative solution
// // eslint-disable-next-line import/no-extraneous-dependencies
// import 'core-js/stable';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
