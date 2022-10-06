import React, { useMemo } from "react";
import { useParams } from "react-router";
import Data from "../components/data";

function Article() {
  const { id } = useParams();
  const articleData = Data.find((article) => article.id === id);

  // updates whenever something in square brackets changes
  const date = useMemo(() => {
    if (!articleData) return "";
    const parsedDate = new Date(articleData.publishedDate);
    return parsedDate.toDateString();
  }, [articleData]);

  console.log();

  return (
    <div className="article-wrapper">
      <header
        style={{
          backgroundImage: `url('${articleData.image.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="header-text">
          <h1>{articleData.title}</h1>
          <p className="date">{date}</p>
          <p className="blurb">
            Note that this is the article blurb. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
          </p>
        </div>
      </header>
      <div className="article-content">
        {articleData.articleText.map((text, i) => {
          const type = text.type;
          switch (type) {
            case "p":
              return <p key={i}>{text.data}</p>;
            case "h1":
              return <h1 key={i}>{text.data}</h1>;
            case "h2":
              return <h2 key={i}>{text.data}</h2>;
            case "h3":
              return <h3 key={i}>{text.data}</h3>;
            case "h4":
              return <h4 key={i}>{text.data}</h4>;
            case "h5":
              return <h5 key={i}>{text.data}</h5>;
            default:
              return <p key={i}>{text.data}</p>;
          }
        })}
      </div>
    </div>
  );
}
export default Article;
