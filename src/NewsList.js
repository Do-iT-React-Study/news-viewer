import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem"
import axios from "../node_modules/axios/index";
export const NewsList = ({category}) => {

    const [article, setArticle] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try{

                const query =  category == 'all'? "":`&category=${category}`

                const res = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=52429beac4194927a8d8b7bbc5caccfd`
                )
                console.log(res.data);

                setArticle(res.data.articles);

            } catch (e) {
                console.error('error', e);
            }
        }

        fetchData();

    }, [category]);

    const sampleData = {
        title:'제목',
        description:'내용',
        url:'https://google.com',
        urlToImage: 'https://mblogthumb-phinf.pstatic.net/MjAxNzEyMjJfMTk1/MDAxNTEzOTI5MTgxNjA0.M3phY7Qy9_zxEsLibLyNsF1RQrjeLjFHObaWkjJK3vYg.I5N1Ro-ddgvn1f8TGWNCwTXwXeiA7cyTewjexfUm3F8g.JPEG.f4040277/blog.jpg?type=w800'
    }

    return(
        <>
            {article && article.map((data, idx) => {
                return(
                    <NewsItem 
                    key={idx} 
                    article={data}
                />
                )
            })}
            
        </>
    )
}