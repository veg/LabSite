import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
require("font-awesome/css/font-awesome.css");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
