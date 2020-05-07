import React from 'react'
import { View, Text} from 'react-native'

const fonte = { style: { fontSize: 30 }}

function filhosComprops(props){
    //Com esta funcao faremos o clone das Props do PAI
     return React.Children.map (props.children,
        c => React.cloneElement(c, { ...props, ...c.props }))
    }

export const Filho = props =>
  <View>
      <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
  </View>

export const Pai = props =>
   <View>
       <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
       {/*{props.children}*/}
       {filhosComprops(props)}
       
   </View>

export const Avo = props =>
   <View>
       <Text {...fonte}>Avo: {props.nome} {props.sobrenome} </Text>
       <Pai nome='Leon' sobrenome={props.sobrenome}>
           <Filho nome='Antunes'/>
           <Filho nome='Erikson'/>
           <Filho nome='Mauro' />
       </Pai>
       
       <Pai {...props} nome='Ray'>
           <Filho nome='Mety' />
           <Filho nome='Brutus' />
       </Pai>
   </View>

