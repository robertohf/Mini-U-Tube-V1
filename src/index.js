import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)

serviceWorker.unregister();