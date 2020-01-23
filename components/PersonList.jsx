import React, { Component } from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';
import data from '../data'

export default class PersonList extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          imageURL: '',
        }
      }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      this.setState({ imageURL: response.data.message });
      console.log("didmount");
    })
    .catch(error => {
      console.log(error);
    });
  }




    render() {
        const { imageURL } = this.state;
        console.log(imageURL);
        return (
            <Image source={{uri: imageURL }}  style={{width: 500, height: 580}}></Image>
          
        );
      }
}
