import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
const albuns = [
    {
      name: '1°',
      photos: [
        require('../../../../assets/images/wlr.png'),
        require('../../../../assets/images/wlr.png'),
        require('../../../../assets/images/wlr.png'),
        require('../../../../assets/images/wlr.png'),
        require('../../../../assets/images/wlr.png'),
        require('../../../../assets/images/wlr.png'),
      ],
    },
    {
      name: '2°',
      photos: [
        require('../../../../assets/images/dsotm.png'),
        require('../../../../assets/images/dsotm.png'),
        require('../../../../assets/images/dsotm.png'),
        require('../../../../assets/images/dsotm.png'),
        require('../../../../assets/images/dsotm.png'),
        require('../../../../assets/images/dsotm.png'),
      ],
    },
    {
      name: '3°',
      photos: [
        require('../../../../assets/images/astroworld.png'),
        require('../../../../assets/images/astroworld.png'),
        require('../../../../assets/images/astroworld.png'),
        require('../../../../assets/images/astroworld.png'),
        require('../../../../assets/images/astroworld.png'),
        require('../../../../assets/images/astroworld.png'),
        ],
    },
];
const Galeria = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Albuns</Text>
      </View>
      {albuns.map((month, index) => (
        <View key={index} style={styles.albumContainer}>
          <Text style={styles.monthTitle}>{month.name}</Text>
          <FlatList
            data={month.photos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.photoContainer}>
                <Image source={item} style={styles.photo} />
              </View>
            )}
            numColumns={3}
            contentContainerStyle={styles.photoList}
          />
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#06364d',
  }, 
  albumContainer: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  monthTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  photoContainer: {
    flex: 1,
    display: 'flex',

  },
  photo: {
    width: 300,
    height: 300,
  },
  photoList: {
  display: 'flex',
  gap: 50,
    marginLeft: 100
  },
});
export default Galeria;