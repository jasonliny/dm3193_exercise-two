import React from "react";
//Add link
function ArticleCard({ date, description, imageAlt, imageSrc }) {
  return (
    <div className="article-card-wrapper">
      <div className="thumbnail">
        <img src={imageSrc} alt={imageAlt}></img>
      </div>
      <div className="details">
        <h2>Article Title</h2>
        <p className="date">{date}</p>
        <p className="description">{description}</p>
        <p className="link">
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
