import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";
import axios from "../node_modules/axios/index";

export const NewsList = ({category}) => {

    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const query = category == 'all' ? '' : `&category=${category}`;

                const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b2b645f6f4d343c592e893ca0ae71ff1`);

                console.log(res.data);
                setArticle(res.data.articles);
            } catch (e) {
                console.error("error:",e);
            }
        };
        fetchData();
    },[category]);

    const sampleData = {
        title:"제목",
        description:"내용",
        url:"https://www.google.com",
        urlToImage:"./unnamed.jpg"
      };

    return (
        <>
            {article &&
                article.map((data, idx) => {
                    return  (
                    <NewsItem
                        key={idx}
                        article={data}/>)
            })}
            
        </>
    );
};