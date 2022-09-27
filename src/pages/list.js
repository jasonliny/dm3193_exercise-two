import React from "react";
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data";

function List() {
  return (
    <main className="page-wrapper">
      <h1>Articles</h1>
      {Data.map((article, i) => (
        <ArticleCard
          key={i}
          date={article.date}
          description={article.blurb}
          imageAlt={article.image.alt}
          imageSrc={article.image.url}
        />
      ))}
    </main>
  );
}

export default List;
