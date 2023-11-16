import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";
import axios from "../node_modules/axios/index";

export const NewsList = () => {
  const [article, setAricle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=f8e2906b486943a38aead3cbf33ddfa6",
        );

        console.log(res.data);
        setAricle(res.data.articles);
      } catch (e) {
        console.error("error", e);
      }
    };
    fetchData();
  }, []);

  const sampleData = {
    title: "제목",
    description: "내용이 들어가겠죠",
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com",
  };

  if (!article) {
    return null;
  }

  return (
    <>
      {article.map((data, idx) => {
        return <NewsItem article={sampleData} />;
      })}
    </>
  );
};
