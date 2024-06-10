import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import ReviewsCard from '../Components/ReviewsCard';
import Add1 from '../Components/Add1';
import Add2 from '../Components/Add2';


const Home = ({ navigation }) => {
  // this is the firsy way of handeling and getting the navigation 
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search Our Property..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBox}
        />
        <Text style={styles.title}>Popular Right Now</Text>
        <Add1 />
        <Add2 />
        <ReviewsCard />
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  searchBox: {
    margin: 10,
    backgroundColor: '#e3effb',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#000000'
  }
})