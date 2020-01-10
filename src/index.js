import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import MainContent from './components/main/MainContent';

const { registerRender } = window;

function domRenderer() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
// Function to execute when application is launch in Mercury application.
// We are passing the root component which will render first in Merucy app.
registerRender('child-app-one', { component: { app: MainContent }, domRenderer });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
