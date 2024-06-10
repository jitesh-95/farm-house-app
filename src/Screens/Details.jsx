import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions, Pressable, TouchableOpacity } from 'react-native'
import React from 'react';
import { Button, Chip, Divider, Icon } from 'react-native-paper';

const Details = ({ route, navigation }) => {
  const { width: windowWidth } = useWindowDimensions();
  // the second way of handeling the navigation
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const data = route?.params?.hotelData?.item;
  const showRating = () => {
    return 'Good';
  };

  return (
    <ScrollView>
      <View>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} scrollEventThrottle={1} style={styles.imagesBox}>
          {data.images.map((item, i) => (
            <View key={i} >
              <Image source={{ uri: item }} style={{ width: windowWidth, height: 250 }} />
            </View>
          ))}
        </ScrollView>

        <Text style={styles.addressText}>
          <Icon source='map-marker' size={20} />
          {data.address}
        </Text>

        <View style={styles.detailsBox}>
          <View style={styles.ratingsBox}>
            <Text style={styles.ratingTitle}>Ratings:</Text>
            <Text style={styles.ratings}>
              {data.ratings}
              <Icon source='star' color='#f0932b' size={20} />
            </Text>
          </View>
          <View>
            <Text style={styles.ratingTag}>{showRating()}</Text>
          </View>
        </View>
        <Divider />

        <View style={styles.descBox}>
          <Text style={styles.descTitle}>Description:</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate soluta, commodi vel deleniti voluptatem repellendus saepe pariatur ab cum itaque aliquid ullam officia quisquam mollitia libero, tempore magnam dolores.</Text>
        </View>

        <View style={styles.aminities}>
          <Text style={styles.aminitiesTitle}>Most popular facilities</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.aminitiesList}>
            <Chip icon='bus-side' style={styles.chips}>Airport shuttle</Chip>
            <Chip icon='wifi' style={styles.chips}>Free Wifi</Chip>
            <Chip icon='smoking-off' style={styles.chips}>Non-smoking rooms</Chip>
            <Chip icon='room-service' style={styles.chips}>Room service</Chip>
            <Chip icon='silverware-fork-knife' style={styles.chips}>Restaurant</Chip>
            <Chip icon='parking' style={styles.chips}>Free Parking</Chip>
            <Chip icon='family-tree' style={styles.chips}>Family rooms</Chip>
            <Chip icon='desk' style={styles.chips}>24-hour front desk</Chip>
            <Chip icon='coffee-maker' style={styles.chips}>Tea/coffee maker in all rooms</Chip>
            <Chip icon='coffee' style={styles.chips}>Good breakfast</Chip>
          </ScrollView>
        </View>

        <View style={styles.nearby}>
          <Text style={styles.aminitiesTitle}>Top attractions</Text>
          <View style={styles.attractionList}>
            <View style={styles.attractionChip}>
              <Text style={styles.attractionname}>Matroosberg Reserve</Text>
              <Text style={styles.attractionKms}>19 km</Text>
            </View>

            <View style={styles.attractionChip}>
              <Text style={styles.attractionname}>Ceres Nature Reserve</Text>
              <Text style={styles.attractionKms}>3.7 km</Text>
            </View>

            <View style={styles.attractionChip}>
              <Text style={styles.attractionname}>Ceres Zipline Adventures</Text>
              <Text style={styles.attractionKms}>1.5 km</Text>
            </View>

            <View style={styles.attractionChip}>
              <Text style={styles.attractionname}>Ceres Mountain Fynbos</Text>
              <Text style={styles.attractionKms}>2 km</Text>
            </View>

            <View style={styles.attractionChip}>
              <Text style={styles.attractionname}>Wittebrug</Text>
              <Text style={styles.attractionKms}>5 km</Text>
            </View>

            <View style={styles.attractionChip}>
              <Text style={styles.attractionname}>Boontjiesrivier Nature Reserve</Text>
              <Text style={styles.attractionKms}>10 km</Text>
            </View>

            <View style={styles.attractionChip}>
              <Text style={styles.attractionname}>Opdrag Private Nature Reserve</Text>
              <Text style={styles.attractionKms}>15 km</Text>
            </View>

            <View style={styles.attractionChip}>
              <Text style={styles.attractionname}>De Oude Kerk Museum Tulbagh</Text>
              <Text style={styles.attractionKms}>18 km</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.chooseBtn}>
          <Text style={styles.btnText}>Choose Room</Text>
          <Text style={[styles.btnText, styles.btnText2]}>${data.price} /per day</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
  imagesBox: {
  },
  image: {
    height: 200,
    width: 200,
  },
  addressText: {
    marginVertical: 10,
    color: '#000000',
    paddingHorizontal: 15,
  },
  detailsBox: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  ratingsBox: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTitle: {
    fontWeight: 'bold',
    color: '#000000'
  },
  ratings: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0984e3',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingTag: {
    backgroundColor: '#009432',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4
  },
  price: {
    color: 'black',
    fontSize: 15,
  },
  descBox: {
    paddingHorizontal: 15,
  },
  descTitle: {
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5,
  },
  aminities: {
    paddingHorizontal: 15,
  },
  aminitiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
    paddingTop: 5,
  },
  chips: {
    backgroundColor: '#c1dff6',
    marginRight: 10
  },
  nearby: {
    paddingHorizontal: 15,
    marginBottom: 10
  },
  attractionList: {
    flex: 1,
    gap: 8,
  },
  attractionChip: {
    backgroundColor: "#dcdde1",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 8,

  },
  attractionname: {
    maxWidth: '90%',
    color: '#000000',
  },
  attractionKms: {
    color: '#000000',
  },
  chooseBtn: {
    marginHorizontal: 15,
    marginVertical: 15,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#145990',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 15
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnText2: {
    fontWeight: 400,
    fontSize: 18
  }
})