import React from "react";
import articles from "../data/articles.js";
import { Link } from "react-router-dom";
import "../App.css";

//when we wants to use js inside a component
// use `` to do it
const ArticleListPage = () => {
  let articleLinkList = articles.map((article) => {
    return (
      <li>
        <Link className="article-list-item" to={`./article/${article.name}`}>
          {article.name}
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      <h1>Articles</h1>
      <ul> {articleLinkList}</ul>
    </React.Fragment>
  );
};
export default ArticleListPage;
