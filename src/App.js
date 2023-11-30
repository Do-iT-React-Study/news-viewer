import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "../node_modules/axios/index";
import { NewsList } from "./NewsList";

function App() {
  

  // const [data, setData] = useState(null);

  // const onClickAPI = () => {
  //   axios
  //   .get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=56f21f8d90c24d8388e8fb43ae61acff")
  //   .then((response) => {
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // };

  return (
    <div>
      <NewsList />
      
      {/* <div>
        <button onClick={onClickAPI}>불러오기</button>
      </div>
      {data && (
        <textarea
        rows={7}
        value={JSON.stringify(data, null, 2)}
        readOnly={true}
        />
      )} */}

    </div>
  );
}

export default App;
