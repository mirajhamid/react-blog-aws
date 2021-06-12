import React from "react";
import articles from "../data/articles.js";
import "../App.css";
import ArticleList from "../components/ArticleList.js";

//when we wants to use js inside a component
// use `` to do it
const ArticleListPage = () => {
  return (
    <React.Fragment>
      <h1>Articles</h1>
      <ArticleList articles={articles}></ArticleList>
    </React.Fragment>
  );
};
export default ArticleListPage;
