import React, { Component } from 'react';
import { View, Text } from 'react-native';

import data from '../data'

export default class PersonList extends Component {
  state = {
    persons: []
  }


  render() {


    // console.log("2")
    //  console.log(this.state.persons["results"])
    console.log("1")
    let result = data().then(
        
    );

    console.log("3")
    console.log(result)
 
    return (

      <View>
          {/* <Text>
        {this.state.persons["id"]}</Text>  
         */}  
      </View>    
     
    )
  }
}