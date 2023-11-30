

import styled from "styled-components";

export const NewsItem = ({article}) => {


    const {title, description, url, urlToImage} = article

    return(

        <NewsItemWrapper>
        {urlToImage && (
            <div>
                <a href={url} target='_blank'>
                    <img className = 'article-img'
                        src = {urlToImage}
                        alt="기사 이미지" />
                </a>
            </div>
        )}
        <div className="article-text">
            <h2>
                <a href={url} target='_blank'
                   className="text-title">
                    <div >{title}</div>
                </a>
            </h2>
            <div className="text-con">{description}</div>
        </div>
        </NewsItemWrapper>
    );

}

export const NewsItemWrapper = styled.div`
    background-color: #eee;
    display: flex;
    gap: 30px;
    padding: 20px;
    margin: 0 auto;
    margin-top: 2rem;
    
    .article-img {
        width: 160px;
        height: 160px;
        //border: 2px solid red;
        object-fit: cover;
    }

    .article-text{
        border: 2px solid blue;
        font-family: Pretendard;

        .text-title{
            margin: 10px;
            text-decoration: none;
            color: black;
        }

        .text-con{
            //border: 1px solid blue;
        }
    }
`