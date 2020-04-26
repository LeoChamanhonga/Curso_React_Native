import React from 'react'
import { Text, View } from 'react-native'

import Padrao from '../estilo/Padrao'
//Componente baseado em funcao

export default props =>
    <Text style={[Padrao.ex]}>Arrow 1 : {props.texto}</Text>


//Exemplo 1
{/*export default function(props) {
    return <Text>{props.texto}</Text>
}*/}

//Exemplo 2
{/*}
export default  props =>
<View>
    <Text>Arrow 1: {props.texto}</Text>
    <Text>Arrow 2: {props.texto}</Text>
</View>
*/}