import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "../node_modules/axios/index";
import { NewsList } from "./NewsList";

function App() {
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
    </div>
  );
}

export default App;
