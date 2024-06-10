import { StyleSheet, View, Pressable, FlatList, Text } from 'react-native'
import React, { useEffect } from 'react';

//data
import { data } from '../Components/Data';
import { Divider } from 'react-native-paper';
import ImageCard from '../Components/ImageCard';

const Gallery = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Divider}
        renderItem={(item) => (
          <Pressable onPress={() => {
            navigation.navigate('Details', { hotelData: item })
          }}>
            <ImageCard farmHouse={item} />
          </Pressable>
        )}
      />
    </View>
  )
}

export default Gallery

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});