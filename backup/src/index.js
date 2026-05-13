import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import registerServiceWorker from './registerServiceWorker';
require("@fortawesome/fontawesome-free/css/all.css"); // needed for navbar paper icons
require("font-awesome/css/font-awesome.css"); // needed for member info icons

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
