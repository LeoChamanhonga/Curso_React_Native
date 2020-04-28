/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
//Modulo importado sem o Default 
import {Inverter, Lotto } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'

export default createDrawerNavigator({
    Evento:{
       screen: () => <Evento />
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18}/>
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
   
    Contador: {
        //Passando parametros
        screen: () => <Contador />

    },
    Lotto: {
        screen: () => <Lotto numeros ={8} />,
        navigationOptions: { title: 'Lotoo'}
    },
    Inverter: {
        screen: () => <Inverter texto='RN !' />
    },
    ParImpar:{
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!!!' />
    }
}, {drawerWidth: 300 })