import React from 'react';
import './App.css';
import NavMenu from './NavMenu.js';
import logo from  './img/logo.svg';

const items=[{name: 'About us'},{name: 'Career'},{name:'Departments',submenu:['Marketing & PR','Customer Success & Sales' ,'Product, Design & UX','Finance & Administration']}
]

function App() {
  return (
    <div className="App">
        <img className='logo' src={logo} />
        <NavMenu tab={items} />
    </div>
  )

} ;

export default App

