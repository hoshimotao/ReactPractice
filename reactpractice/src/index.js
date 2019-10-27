import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


            // refer to App.js
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
