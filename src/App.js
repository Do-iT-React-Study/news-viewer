import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "../node_modules/axios/index";
import { NewsItem } from "./NewsItem";
import { NewsList } from "./NewsList";

function App() {
  // const [data, setData] = useState(null);

  // const onClickAPI = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=2d8dbec14f9149fea238b324c5540aa1",
  //     );
  //     setData(res.data);
  //   } catch (err) {
  //     console.error("err:", err);
  //   }
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
