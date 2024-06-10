import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'

const ReviewsCard = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What people says</Text>

      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} scrollEventThrottle={1}>
        <View style={{ ...styles.reviewBox, width: windowWidth }}>
          <Text style={styles.review}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus minima minus aut nostrum voluptatem doloremque nam, reprehenderit 😊</Text>
        </View>

        <View style={{ ...styles.reviewBox, width: windowWidth }}>
          <Text style={styles.review}>Its awesome, and can't be better ❤️</Text>
        </View>

        <View style={{ ...styles.reviewBox, width: windowWidth }}>
          <Text style={styles.review}>I just love it 😍</Text>
        </View>

        <View style={{ ...styles.reviewBox, width: windowWidth }}>
          <Text style={styles.review}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus minima minus aut nostrum voluptatem doloremque nam, reprehenderit 👌👌</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ReviewsCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginVertical: 20
  },
  reviewBox: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10
  },
  review: {
    fontStyle: 'italic',
    textAlign: 'center',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 15,
    color: '#000000',
    elevation: 2,
    borderRadius: 2
  }
})