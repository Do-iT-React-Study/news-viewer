import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "../node_modules/axios/index";
import { NewsItem } from "./NewsItem";

function App() {
  const [data, setData] = useState(null);

  const onClickApi = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=f8e2906b486943a38aead3cbf33ddfa6",
      )
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <>
      <NewsItem></NewsItem>
      {/* <div>
        <button onClick={onClickApi}>불러오기</button>
      </div>
      {data && 
      <textarea>
        rows={7}
      </textarea>} */}
    </>
  );
}

export default App;
