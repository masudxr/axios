import { useState } from "react";
import axios from 'axios';
import ComponentTwo from '../App';

const [data, setData] = useState("");
const GetData = () =>{
  axios.get("http://api.quotable.io/random")
  .then(res => {
    console.log(res.data.content);
  setData(res.data.content);
  }).catch(err => {
    console.log(err);
  });
};

export default GetData;

