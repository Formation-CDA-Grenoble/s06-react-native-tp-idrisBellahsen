import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


export default function App() {
  
  
  let res;
  axios.get('https://randomuser.me/api/')
  .then(function (response) {
    // handle success
     res = response;

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
  
  
  
  
  return (
    
    <View style={styles.container}>
      <Text>{res}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
