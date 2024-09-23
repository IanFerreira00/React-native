import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

const KarateKid = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Motoqueiro Fantasma</Text>
        <Text style={styles.subtitle}>
        Motoqueiro Fantasma: A Jornada Sombria do Anti-Herói nas Telonas.
        </Text>
      </View>

      <View style={styles.filmes}>
        <Text style={styles.sectionTitle}>Filmes do motoqueiro fantasma
        </Text>
        <View style={styles.filmesList}>
          {['Motoqueiro Fantasma (2007).',
            'Motoqueiro Fantasma - Espírito de vingança (2011).'].map((filme, index) => (
              <View key={index} style={styles.filmeItem}>
                <Text style={styles.filmeText}>{filme}</Text>
              </View>
          ))}
        </View>
      </View>

      <View style={styles.cards}>
        {[
          { title: 'Motoqueiro Fantasma', year: '2007', actor: 'Nickolas Cage', image: require('../../../../assets/images/mf1.png') },
          { title: 'Motoqueiro Fantasma - Espírito de vingança', year: '2011', actor: 'Nickolas Cage', image: require('../../../../assets/images/mfev.png') },
        ].map((card, index) => (
          <View key={index} style={styles.card}>
            <Image source={card.image} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardText}>Ano: {card.year}</Text>
              <Text style={styles.cardText}>Ator Principal: {card.actor}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
    color: '#fff',
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#fff',
  },
  filmes: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
  },
  sectionTitle: {
    color: '#ffcc00',
    marginBottom: 10,
    fontSize: 20,
  },
  filmesList: {
    marginTop: 10,
  },
  filmeItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: 5,
    padding: 15,
    borderRadius: 5,
  },
  filmeText: {
    color: '#fff',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: 550,
    height: 500,
    alignItems: 'center',
  },
  cardImage: {
    width: 300,
    height: 420,
    borderRadius: 10,
  },
  cardInfo: {
    padding: 10,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardText: {
    color: '#fff',
  },
  footer: {
    backgroundColor: 'rgba(0, 123, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  footerTitle: {
    color: '#fff',
    marginBottom: 10,
  },
  footerLink: {
    color: '#ffcc00',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default KarateKid;