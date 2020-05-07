import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

//Lista de Alunos
const alunos = [
    {id: 1, nome: 'Joao', nota: 7.9},
    {id: 2, nome: 'Araujo', nota: 8.9},
    {id: 3, nome: 'Rafaela', nota: 7.9},
    {id: 4, nome: 'Shelton', nota: 6.9},
    {id: 5, nome: 'Cristina', nota: 5.9},
    {id: 6, nome: 'Asley', nota: 4.9},
    {id: 7, nome: 'Chanaya', nota: 3.9},
    {id: 8, nome: 'Rodney', nota: 10.9},
    {id: 9, nome: 'Quentin', nota: 6.2},

    {id: 11, nome: 'Joao', nota: 7.9},
    {id: 12, nome: 'Araujo', nota: 8.9},
    {id: 13, nome: 'Rafaela', nota: 7.9},
    {id: 14, nome: 'Shelton', nota: 6.9},
    {id: 15, nome: 'Cristina', nota: 5.9},
    {id: 16, nome: 'Asley', nota: 4.9},
    {id: 17, nome: 'Chanaya', nota: 3.9},
    {id: 18, nome: 'Rodney', nota: 10.9},
    {id: 19, nome: 'Quentin', nota: 6.2},

]

const itemEstilo = {
    paddingHorizontal : 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItems = ({item}) =>{
        
    }
}