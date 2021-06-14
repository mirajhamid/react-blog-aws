import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

//This is reusable component
const ArticleList = (props) => {
  let articleLinkList = props.articles.map((article) => {
    return (
      <li>
        <Link className="article-list-item" to={`/article/${article.name}`}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150).trim()}...</p>
        </Link>
      </li>
    );
  });

  <ul> {articleLinkList}</ul>;

  return <ul>{articleLinkList}</ul>;
};

export default ArticleList;
