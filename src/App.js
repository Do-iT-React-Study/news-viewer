import logo from "./logo.svg";
import "./App.css";
import axios from "../node_modules/axios/index";
import React, { useState } from 'react'
import { NewsItem } from "./NewsItem";
import { NewsList } from "./NewsList";

function App() {




const [data,setData] = useState(null);

const onClickAPI = () => {
  axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=52429beac4194927a8d8b7bbc5caccfd')
      .then(
      (response) => {
      setData(response.data)
      }
      )
}

  return (
    <div>
      <NewsList/>
      {/* <div>
        <button onClick={onClickAPI}>불러오기</button>
      </div>
      {data &&(
      <textarea 
        rows={7} 
        value={JSON.stringify(data,null,2)}
        readOnly={true}/>
      )} */}
      
    </div>
  );
}

export default App;
