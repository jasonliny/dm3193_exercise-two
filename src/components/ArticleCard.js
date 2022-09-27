import React from "react";

function ArticleCard({ date, description, imageAlt, imageSrc, link }) {
  return (
    <div class="article-card-wrapper">
      <div class="thumbnail">
        <img src={imageSrc} alt={imageAlt}></img>
      </div>
      <div class="details">
        <h2>Article Title</h2>
        <p class="date">{date}</p>
        <p class="description">{description}</p>
        <p class="link">
          <a href={link}>Read More</a>
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
