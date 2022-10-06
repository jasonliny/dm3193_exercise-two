import React, { useMemo } from "react";

function ArticleCard({ date, description, id, imageAlt, imageSrc, title }) {
  const articleDate = useMemo(() => {
    const parsedDate = new Date(date);
    return parsedDate.toDateString();
  }, [date]);
  return (
    <div className="article-card-wrapper">
      <div className="thumbnail">
        <img src={imageSrc} alt={imageAlt}></img>
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p className="date">{articleDate}</p>
        <p className="description">{description}</p>
        <p className="link">
          <a href={`/article/${id}`}>Read More</a>
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
