import React, { useEffect } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {useState} from 'react'

const styles = StyleSheet.create({

})

export default Pokemon = () => {
    const [pokemon, setPokemon] = useState('')

    const lista_pokemons = [
        {nome:'Charizard', id:1},
        {nome:'Blastoise', id:2},
        {nome:'Venossaur', id:3}
    ]

    useEffect(() =>{
        console.log('dentro do useEffect')
    , [pokemon]})
    console.log('fora do useEffect')
    return(
        <View>
            <Text>Selecione</Text>
            <Picker
            selectedValue = {pokemon}
            onValueChange = {(item) => setPokemon(item)}
            
            >
                {lista_pokemons.map((item, index) => (
                   <Picker.Item key={index} label={item.nome} value={item.nome}/>
                ))} 
            </Picker>
        </View>
    )
}