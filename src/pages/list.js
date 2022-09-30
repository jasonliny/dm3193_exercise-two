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
          date={article.publishedDate}
          description={article.blurb}
          id={article.id}
          imageAlt={article.image.alt}
          imageSrc={article.image.url}
          title={article.title}
        />
      ))}
    </main>
  );
}

export default List;
