import { StyleSheet, Text, View, ScrollView, } from 'react-native'
import React from 'react'
import { Button, Divider, TextInput } from 'react-native-paper';

const Contact = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>How can we help you 😊</Text>
        <Divider />
        <View style={styles.form}>
          <TextInput label="Name" style={styles.inputBackground} />
          <TextInput label="Email" style={styles.inputBackground} />
          <TextInput label="Phone Number" style={styles.inputBackground} />
          <TextInput label="Country" style={styles.inputBackground} />
          <Button mode="contained" style={styles.buttonBackground}>Submit</Button>
        </View>
      </View>
    </ScrollView>
  )
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  title: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold'
  },
  form: {
    marginTop: 15,
    flex: 1,
    gap: 20
  },
  inputBackground: {
    backgroundColor: '#c1dff6'
  },
  buttonBackground: {
    backgroundColor: '#145990'
  }
})