import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import CompA, { CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
ReactDOM.render(
  <div>
    <Contador numeroInicial = {100}/>
    {/* <ComponenteClasse valor = "Sou um componente de classe"/> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Familia sobrenome = "Pereira" >
      <Membro nome = "Andre"  />
      <Membro nome = "Mariana" />
    </Familia> */}
    {/* <FamiliaSilva /> */}
    {/* <MultiElementos /> */}
    {/* <CompA valor="Olá eu sou A!" />
    <B valor="Olá eu sou B!" /> */}
    {/* <PrimeiroComponente valor="Bom dia!"/> */}
    
  </div>, elemento)