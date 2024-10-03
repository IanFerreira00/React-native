import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { Link } from "expo-router";

export default function SobreHome() {
  const data = [
    { id: '1', link: '../Perfil/Filmes', titulo: 'Filmes Favoritos' },
    { id: '2', link: '../Perfil/Musica', titulo: 'Música' },
    { id: '3', link: './Atividades', titulo: 'Atividades' }
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sobre Mim</Text>
      </View>
      <View style={styles.main}>
        <Image 
          style={styles.profileImage}
          source={require('../../assets/images/eu.png')}
        />
        <Text style={styles.welcome}>Bem-vindo</Text>
        <Text style={styles.description}>
          Meu nome é Ian, curso desenvolvimento de sistemas no sesi senai de São José.  Tenho 17 anos e moro em florianópolis.
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link style={styles.link} href={item.link}>
              {item.titulo}
            </Link>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  
  header: {
    backgroundColor: 'black',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 28,
  },

  main: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#d5d5d5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '100%',
    maxWidth: 600,
},

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: 'black',
  },

  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },

  description: {
    textAlign: 'center',
    margin: 10,
    width: '90%',
    color: '#555',
    lineHeight: 20,
  },

  link: {
    backgroundColor: 'black',
    margin: 10,
    padding: 15,
    width: 300,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    fontWeight: 'bold',
    elevation: 2,
  },
});