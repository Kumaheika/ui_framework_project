import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OtherButton from './OtherButton';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<OtherButton />, document.getElementById('OtherButton'));
registerServiceWorker();
