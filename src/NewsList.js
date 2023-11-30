import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";
import axios from "../node_modules/axios/index";

export const NewsList = ({ category }) => {
    const [article, setArticle] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const query = category == "all" ? "" : `&category=${category}`;
                const res = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=56f21f8d90c24d8388e8fb43ae61acff`
                );

                console.log(res.data);
                setArticle(res.data.articles);
            } catch (e) {
                console.error("error:", e);
            }
        };
        fetchData();
    }, [category]);

    const sampleData = {
        title: "제목",
        description: "내용이 들어가겠죠",
        url: "https://google.com",
        urlToImage: "https://via.placeholder.com/160",
    };

    return (
        <>
        {article &&
            article.map((data, idx) => {
                return (
                <NewsItem
                key = {idx}
                article={data} 
                />
                );
             })}
        </>
    )
}