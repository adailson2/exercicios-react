import React from 'react'
import { filhosComProps } from '../utils/utils'
export default props => 
    <div>
        <h1>Familia</h1>

        {filhosComProps(props)}
        
        {/* Cria um clone do objeto e passa todas propriedades pro filho (Para todos os filhos)
        { React.Children.map(props.children, filho => {
            return React.cloneElement(filho, { ...props })
        })} */}

        {/* Cria um clone do objeto e passa todas propriedades pro filho (Para um filho)*/}
        {/* {React.cloneElement(props.children, { ...props })} */}

        {/* Passa uma propriedade apenas */}
        {/* {React.cloneElement(props.children, 
            { sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>