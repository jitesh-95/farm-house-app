import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react';
import { imagesArr1 } from './Data';
import { Button } from 'react-native-paper';

const Add1 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardView}>
          <Image source={{ uri: imagesArr1[0] }} style={styles.image1} />
          <Text style={styles.cardAbout}>
            Located in Imhoffʼs Gift and only 12 km from Chapman's Peak, Happy Homes - Imhoffs Gift provides accommodation with sea views, free WiFi and free private parking.
          </Text>
          <Button icon='arrow-right-circle-outline' mode='contained' style={styles.learnBtn}>Learn More</Button>
        </View>

        <View style={styles.imagesBox}>
          <Image source={{ uri: imagesArr1[1] }} style={styles.image2} />
          <Image source={{ uri: imagesArr1[2] }} style={styles.image3} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Add1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 10
  },
  cardView: {
    width: '50%',
    backgroundColor: '#192a56'
  },
  cardAbout: {
    color: '#ffffff',
    padding: 10
  },
  learnBtn: {
    backgroundColor: 'black',
    marginHorizontal: 10
  },
  image1: {
    width: '100%',
    height: 120,
  },
  imagesBox: {
    width: '48%',
    flex: 1,
    gap: 10
  },
  image2: {
    width: '100%',
    height: 100
  },
  image3: {
    width: '100%',
    height: 200
  },
})