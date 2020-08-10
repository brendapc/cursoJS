import React from 'react'

/* exporting without default */
export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>
/* same as: */
export { BoaTarde,BoaNoite}

/* different from */
export default {BoaTarde,BoaNoite}