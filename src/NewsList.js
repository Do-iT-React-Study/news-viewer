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


                // 이 주소 써서 https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15084084

                
                    // 이 예시코드 참고해서 짜다가

                    // var xhr = new XMLHttpRequest();
                    // var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
                    // var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
                    // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
                    // queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
                    // queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML'); /**/
                    // queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20210628'); /**/
                    // queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
                    // queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
                    // queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/
                    // xhr.open('GET', url + queryParams);
                    // xhr.onreadystatechange = function () {
                    //     if (this.readyState == 4) {
                    //         alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
                    //     }
                    // };

                    // xhr.send('');
                                    
                //http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=인증키&numOfRows=10&pageNo=1&base_date=20210628&base_time=0600&nx=55&ny=127

                // 못짜겟어요,,, 기말 끝나고 다시 도전해보겠습니다,,,
                

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