import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import axios from 'axios';


export default class PersonList extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          data: null,
        }
      }

  componentDidMount() {
    axios.get('https://randomuser.me/api/')
    .then(response => {
    this.setState({ data: response.data });

    })
    .catch(error => {
      console.log(error);
    });
  }



    render() {
        const {data}= this.state

        //Important
        if (data=== null){

            return <Text>Text Loading...</Text>
        }

        const person = data.results[0] 


        return (
            <View style = {{flex: 1,
            backgroundColor: '#fff',
             alignItems: 'center',
            justifyContent: 'center'}}>
             <Text>{person.name.first}</Text>
            </View>
          
        );
      }
      
}
