import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import datas from './data';

ReactDOM.render(<App datas={[]} />, document.getElementById('root'));

setTimeout(function() {
  ReactDOM.render( < App datas = { datas } />, document.getElementById('root'));
}, 2000);

serviceWorker.unregister();
