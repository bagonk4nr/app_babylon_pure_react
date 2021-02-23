// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
import {AppRegistry} from 'react-native';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@babylonjs/core';
import '@babylonjs/materials';
import '@babylonjs/post-processes';
import '@babylonjs/loaders';
import '@babylonjs/serializers';
import '@babylonjs/inspector';
import '@babylonjs/gui';
import * as CANNON from 'cannon';
window.CANNON = CANNON;

AppRegistry.registerComponent('app-babylon-native', () => App);
AppRegistry.runApplication('app-babylon-native', { initialProps: {}, rootTag: document.getElementById('root') });

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
