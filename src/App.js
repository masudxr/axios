import { useState } from "react";
import axios from 'axios';

function App() {
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
    return(
        <div>
        <button onClick={GetData}>Get Data</button>
        { <p>{data}</p> }
        </div>
     );
}
export default App;