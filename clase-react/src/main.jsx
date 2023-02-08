import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Botones from './Contador'
import Pantalla from './pantallas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Pantalla pantalla/>
      <Pantalla pantalla/>
      <Botones nombre = "0" />
      <Botones nombre = "1" />
      <Botones nombre = "2" />
      <Botones nombre = "3" />
      <Botones nombre = "4" />
      <Botones nombre = "5" />
      <Botones nombre = "6" />
      <Botones nombre = "7" />
      <Botones nombre = "8" />
      <Botones nombre = "+" />
      <Botones nombre = "-" />
      <Botones nombre = "*" />
      <Botones nombre = "/" />
      <Botones nombre = "=" />
    </div>
    
  </React.StrictMode>,
)
