import React from "react";

function Article({ title, date, content }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{content}</p>
    </article>
  );
}

export default Article;