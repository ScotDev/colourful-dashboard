/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:

 */


// const { ipcRenderer } = require('electron')

import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
// Necessary for some global styles
import './index.css';

import { ipcRenderer } from 'electron';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Might need path adjustment when built
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

// This should be at component level or elsewhere. Couldn't figure out how to access subscribe from component
store.subscribe(() => {
    ipcRenderer.send('settings:update', store.getState())
    console.log("Renderer says settings updated")
})



ReactDOM.render(<React.StrictMode> <Provider store={store}> <App /></Provider></React.StrictMode>, document.getElementById('root'));



console.log('👋 This message is being logged by "renderer.js", included via webpack');
