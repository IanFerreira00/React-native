import { Link } from 'expo-router';
import { View, Pressable, StyleSheet, Text, ScrollView } from "react-native";


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 20,

  },
  botao: {
    backgroundColor: '#FF6F61', 
    paddingVertical: 15,
    borderRadius: 25, 
    marginVertical: 10  , 
    alignItems: 'center',
    justifyContent: 'center',
    width: 250, 
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    },
    sha0dowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8, 
  },
  botaoTexto: {
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: '600', 
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 30,
    textAlign: 'center',
  },
});

const Inicio = function () {
  return (
    <ScrollView>
    <View style={style.container}>
      <Text style={style.title}>Selecione uma Opção</Text>

      <Link href="/Banco">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Banco</Text>
        </Pressable>
      </Link>

      <Link href="/calculadora">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Calculadora</Text>
        </Pressable>
      </Link>

      <Link href="/lista-tarefas">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Lista de Tarefas</Text>
        </Pressable>
      </Link>

      <Link href="/Pokemon">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Pokémon</Text>
        </Pressable>
      </Link>

      <Link href="/SignUp">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Login</Text>
        </Pressable>
      </Link>

      <Link href="/splashScreen">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Splash Screen</Text>
        </Pressable>
      </Link>
      <Link href="/">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Perfil</Text>
        </Pressable>
      </Link>
      <Link href="/iFome">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Ifome</Text>
        </Pressable>
      </Link>
      <Link href="/Galeria">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Galeria</Text>
        </Pressable>
      </Link>
      <Link href="/Camera">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Camera</Text>
        </Pressable>
      </Link>
      <Link href="/memorias">
        <Pressable style={style.botao}>
          <Text style={style.botaoTexto}>Memórias</Text>
        </Pressable>
      </Link>
    </View>
</ScrollView>
  );
}

export default Inicio;
