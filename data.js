import React from 'react';
import axios from 'axios';

export default function data() {
  let result =""
    axios.get(`https://randomuser.me/api/`)
            .then(res => {

            const persons = res.data;
            result={ persons };
            console.log("2")
            }).catch((error=>{ 
            console.log(error);
            }))
  
    return  result
            
}
