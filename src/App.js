import logo from "./logo.svg";
import "./App.css";
import axios from "../node_modules/axios/index";
import React, { useCallback, useState } from 'react'
import { NewsItem } from "./NewsItem";
import { NewsList } from "./NewsList";
import { Categories } from "./components/Categories";
import { Route } from "../node_modules/react-router-dom/dist/index";
import { NewsPage } from "./pages/NewsPage";
import { Routes } from "../node_modules/react-router-dom/dist/index";
import { Router } from "../node_modules/react-router-dom/dist/index";
function App() {




const [data,setData] = useState(null);


const [category, setCategory] = useState("all")

const onSelect = useCallback((category) => setCategory(category))

const onClickAPI = () => {
  axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=52429beac4194927a8d8b7bbc5caccfd')
      .then(
      (response) => {
      setData(response.data)
      }
      )
}

  return (
    
      <Routes>
        <Route path="/:category?" element={<NewsPage/>}/>
      </Routes>
    
    
    
      /* <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/> */
      /* <div>
        <button onClick={onClickAPI}>불러오기</button>
      </div>
      {data &&(
      <textarea 
        rows={7} 
        value={JSON.stringify(data,null,2)}
        readOnly={true}/>
      )} */
  );
}

export default App;
