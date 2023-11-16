import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "../node_modules/axios/index";
import { NewsItem } from "./NewsItem";
import { NewsList } from "./NewsList";

function App() {

  

  // const [data, setData] = useState(null);

  // const onClickAPI = () => {
  //   axios
  //     .get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=b2b645f6f4d343c592e893ca0ae71ff1")
  //     .then((response) => {
  //     setData(response.data);
  //   });
  // };
  return (
    <div>
      <NewsList/>
      {/* <NewsItem article = {sampleData}/> */}
      {/* <div>
        <button onClick={onClickAPI}>불러오기</button>
      </div>
      {data && (
        <textarea 
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}/>
      )} */}
      
    </div>
  );
}

export default App;
