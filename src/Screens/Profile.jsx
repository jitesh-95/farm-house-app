import { ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react';
import { Card, Icon } from 'react-native-paper';

const Profile = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <Icon source='account' size={25} />
          <Text style={styles.title}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon source='information-variant' size={25} />
          <Text style={styles.title}>About us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => {
          navigation.navigate('Contact')
        }}>
          <Icon source='cellphone-basic' size={25} />
          <Text style={styles.title}>Contact us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon source='cog-outline' size={25} />
          <Text style={styles.title}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon source='logout' size={25} />
          <Text style={styles.title}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    backgroundColor: '#dcdde1',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold'
  },
})