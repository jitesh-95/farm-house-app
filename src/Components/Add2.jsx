import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react';
import { imagesArr2 } from './Data';


const Add2 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.image1Box}>
          <Image source={{ uri: imagesArr2[0] }} style={styles.image1} />
          <Text style={styles.imageTitle}>Stylish & Avant Grade Boutique Hotel in Kakamas</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Add2;

const styles = StyleSheet.create({
  image1Box: {
    backgroundColor: 'black',
    marginTop: 20,
    position: 'relative',
  },
  image1: {
    height: 300,
    width: '100%'
  },
  imageTitle: {
    position: 'absolute',
    zIndex: 10,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    maxWidth: '50%',
    left: '25%',
    textAlign: 'center',
    top: '25%',
    height: '100%'
  }
})