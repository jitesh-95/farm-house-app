import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-paper';

const Notification = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Icon source='bell-check' size={30} />
      <Text style={styles.notification}>No Unread Notifications</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notification: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})