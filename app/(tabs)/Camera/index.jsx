import {useState, useRef} from 'react';
import {View, Button, StyleSheet, Text, Image} from 'react-native';
import {CameraView, useCameraPermissions } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

export default function Camera(){
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [lado, setLado] = useState('back')

    if (!permissao){
        return <View></View>
    }
    if (!permissao.granted){
        return(
            <View style={style.container}>
                <Text style={style.textPermissao}>Voce precisa conceder permissão para uso da camera.</Text>
                <Button
                title='Pedir permissao'
                onPress={pedirPermissao}
                />
            </View>
        )
    }
    const tirarFoto = async () => {

    const foto_base64 = await cameraRef.current?.takePictureAsync({
        quality: 1,
        base64: true
    }) 
    setFoto(foto_base64)
 
    }

    const trocaCamera = () => {
        setLado(lado == 'back' ? 'front' : 'back')
    }
    const salvarFoto = () => {
        MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
    }

    return(
        <View style={style.container}>
        {foto ? 
            <View style={style.camera}>
                <Button title='Excluir foto' onPress={() => setFoto(null)}/>
                <Button title='Salvar foto' onPress={salvarFoto}/>
                <Image source={{ uri: foto.uri}} style={style.foto}/>
            </View> :
        <CameraView facing={lado} style={style.camera} ref={cameraRef}>
            <Button style={style.botao} title='Tirar foto' onPress={tirarFoto}/>
            <Button title='Trocar camera' onPress={trocaCamera}/>
        </CameraView>
    }  
    </View>
)}

const style = StyleSheet.create({ 
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',


    },
    textPermissao:{
        textAlign: 'center',
    },
    camera:{
        flex: 1
    },
    foto:{
        width: '100%',
        height: '100%'
    },
    botao:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    }

})