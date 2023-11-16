import styled from "../node_modules/styled-components/dist/index";

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
          >
            <div className="text-title">{title}</div>
          </a>
        </h2>
        <div className="text-description">{description}</div>
      </div>
    </NewsItemWrapper>
  );
};

export const NewsItemWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;

  .article.img {
    width: 360px;
    height: 160px;
    object-fit: cover;
  }

  .article.text {
    font-family: Pretemdard;
    .text-title {
      text-decoration: none;
      color: black;
      display: flex;
    }

    .text-description {
    }
  }
`;
