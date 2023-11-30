import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import axios from "../node_modules/axios/index";
import { NewsItem } from "./NewsItem";
import { NewsList } from "./NewsList";
import { Categories } from "./components/Categories";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import { NewsPage } from "./pages/NewsPage";

function App() {

  // const [category, setCategory] = useState("all");

  // const onSelect = useCallback(category => setCategory(category));

  // const [data, setData] = useState(null);

  // const onClickAPI = () => {
  //   axios
  //     .get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=b2b645f6f4d343c592e893ca0ae71ff1")
  //     .then((response) => {
  //     setData(response.data);
  //   });
  // };
  return (
    <Routes>

      <Route path="/:category?" element={<NewsPage />}>

      </Route>
      
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
      
    </Routes>
  );
}

export default App;
