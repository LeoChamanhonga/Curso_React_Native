import React from 'react'
import { Text, View } from 'react-native'

//Componente baseado em funcao

{/*export default function(props) {
    return <Text>{props.texto}</Text>
}*/}


export default  props =>
<View>
    <Text>Arrow 1: {props.texto}</Text>
    <Text>Arrow 2: {props.texto}</Text>
</View>