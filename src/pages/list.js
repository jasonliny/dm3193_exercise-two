import React from "react";
import ArticleCard from "../components/ArticleCard";

const date = "Wednesday, August 22, 2019";
const descript =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const alt = "alt";
const src = "source";
const link = "#";

function List() {
  return (
    <main className="page-wrapper">
      <h1>Articles</h1>
      <ArticleCard
        date={date}
        description={descript}
        imageAlt={alt}
        imageSrc={src}
        link={link}
      />
      <ArticleCard
        date={date}
        description={descript}
        imageAlt={alt}
        imageSrc={src}
        link={link}
      />
      <ArticleCard
        date={date}
        description={descript}
        imageAlt={alt}
        imageSrc={src}
        link={link}
      />
      <ArticleCard imageAlt="alt-text" imageSrc="source" />
      <ArticleCard imageAlt="alt-text" imageSrc="source" />
    </main>
  );
}

export default List;
