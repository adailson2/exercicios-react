import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA, CompB } from './componentes/DoisComponentes'

const elemento = document.getElementById('root')
ReactDOM.render(
  <div>
    <CompA valor="Olá eu sou A!" />
    <CompB valor="Olá eu sou B!" />
    {/* <PrimeiroComponente valor="Bom dia!"/> */}
  </div>, elemento)