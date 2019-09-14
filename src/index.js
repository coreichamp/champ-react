import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'
import ListMenu from './ListMenu'

const menuItems = [{ title: 'Menu A' }, { title: 'Menu B' }, { title: 'Menu C' }, { title: 'Menu D' }]

ReactDOM.render(<ListMenu items={menuItems} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

