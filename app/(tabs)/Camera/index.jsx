import { useState, useRef, useEffect } from 'react';
import { View, Button, StyleSheet, Text, Image, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function CameraComponent() {
  const [permissao, pedirPermissao] = useCameraPermissions();
  const [foto, setFoto] = useState(null);
  const cameraRef = useRef(null);
  const [lado, setLado] = useState('back');
  const [scanned, setScanned] = useState(false);

  if (!permissao) {
    return <View></View>;
  }

  if (!permissao.granted) {
    return (
      <View style={style.container}>
        <Text style={style.textPermissao}>
          Você precisa conceder permissão para uso da câmera.
        </Text>
        <Button title="Pedir permissão" onPress={pedirPermissao} />
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert('QR Code Escaneado', `Tipo: ${type}\nConteúdo: ${data}`);
    setTimeout(() => setScanned(false), 3000); 
  };

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
    MediaLibrary.saveToLibraryAsync(foto.uri);
    setFoto(null);
  };

  return (
    <View style={style.container}>
      {foto ? (
        <View style={style.camera}>
          <Button title="Excluir foto" onPress={() => setFoto(null)} />
          <Button title="Salvar foto" onPress={salvarFoto} />
          <Image source={{ uri: foto.uri }} style={style.foto} />
        </View>
      ) : (
        <CameraView
        flash='on'
          style={style.camera}
          facing={lado}
          ref={cameraRef}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          barCodeScannerSettings={{
          barCodeTypes: ['qr']
          }}

        >
          <Button style={style.botao} title="Tirar foto" onPress={tirarFoto} />
          <Button title="Trocar câmera" onPress={trocaCamera} />
        </CameraView>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textPermissao: {
    textAlign: 'center',
  },
  camera: {
    flex: 1,
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  botao: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
});
