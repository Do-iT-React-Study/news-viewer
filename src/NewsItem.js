import styled from "styled-components";

export const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemWrapper>
      {urlToImage && (
        <div className="article-img">
          <a
            href={url}
            target="_blank"
          >
            <img
              src={urlToImage}
              alt="기사 이미지"
            />
          </a>
        </div>
      )}
      <div className="article-text">
        <h2>
          <a
            href={url}
            target="_blank"
            className="text-title"
          >
            <div>{title}</div>
          </a>
        </h2>
        <div className="text-description">{description}</div>
      </div>
    </NewsItemWrapper>
  );
};

export const NewsItemWrapper = styled.div`
  background-color: #eee;
  display: flex;
  border-radius: 5px;
  gap: 30px;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;

  .article-img img {
    width: 160px;
    height: 160px;
    object-fit: cover;
  }

  .article-text {
    font-family: Pretendard;

    .text-title {
      text-decoration: none;
      color: black;
    }

    .text-description {
    }
  }
`;
