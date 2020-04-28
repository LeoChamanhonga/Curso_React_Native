import React from 'react'
import { View, Text} from 'react-native'

const fonte = { style: { fontSize: 30 }}

export const Filho = props =>
  <View>
      <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
  </View>

export const Pai = props =>
   <View>
       <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
       {props.children}
   </View>

export const Avo = props =>
   <View>
       <Text {...fonte}>Avo: {props.nome} {props.sobrenome} </Text>
       <Pai nome='Leon' sobrenome={props.sobrenome}>
           <Filho nome='Antunes'/>
           <Filho nome='Erikson'/>
           <Filho nome='Mauro' />
       </Pai>
   </View>

