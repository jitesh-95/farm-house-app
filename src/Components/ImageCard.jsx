import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { Icon, IconButton } from 'react-native-paper';


const ImageCard = ({ farmHouse }) => {
  const handleLike = (e) => {
    e.preventDefault();
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: farmHouse.item.heroUrl }} style={styles.heroImage} />
      <View style={styles.like}>
        <IconButton icon='heart-outline' iconColor='white' onPress={handleLike} />
      </View>
      <View style={styles.nameBox}>
        <Text style={styles.name}>{farmHouse.item.name}</Text>
        <View style={styles.ratingsBox}>
          <Text style={styles.ratings}>{farmHouse.item.ratings}</Text>
          <Icon source='star' color='#f0932b' size={15} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#dfe6e9',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 5,

  },
  like: {
    position: 'absolute',
    zIndex: 10,
    right: 0,
  },
  heroImage: {
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  nameBox: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

  },
  name: {
    color: '#0984e3',
    fontSize: 18,
    fontWeight: '500',
  },
  ratingsBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ratings: {
    color: '#000000',
  }
})


export default ImageCard;