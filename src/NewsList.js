import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";
import axios from "../node_modules/axios/index";

export const NewsList = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=2d8dbec14f9149fea238b324c5540aa1",
        );

        console.log(res.data);
        setArticle(res.data.articles);
      } catch (e) {
        console.error("error:", e);
      }
    };
    fetchData();
  }, []);

  const sampleData = {
    title: "제목",
    description: "내용이 들어가겠죠",
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160",
  };

  //   if (!article) {
  //     return null;
  //   }

  return (
    <>
      {article &&
        article.map((data, idx) => {
          return (
            <NewsItem
              key={idx}
              article={data}
            />
          );
        })}
    </>
  );
};
