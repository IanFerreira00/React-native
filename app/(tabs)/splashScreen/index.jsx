import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from 'expo-router';


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 150,
        height: 150,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
})


const splashScreen = function () {
    return <View style={style.container}>
        <LinearGradient
            colors={['black', 'red']}
            style={style.background}
        />
        <Link href="/Pokemon">
        <Image
            style={style.tinyLogo}
            source={require('../../../assets/images/fla.png')}
        /></Link>
    </View>
}

export default splashScreen;