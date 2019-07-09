import React from 'react'

let isLegal = false
export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h1>{1+1}</h1>
        <p>{isLegal ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>


    
