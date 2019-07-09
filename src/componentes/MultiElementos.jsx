import React from 'react'

export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]

// Solução 01 - Tag (Mais usada)
// export default props =>
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>


// Solução 02 - React.Fragment
// export default props =>
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>

// Solução 03 - Array
// export default props => [
//     <h1>Parte 1</h1>,
//     <h2>Parte 2</h2>
// ]