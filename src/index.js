import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Navbar from './Navbar';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<Navbar />, document.getElementById('nav'));
