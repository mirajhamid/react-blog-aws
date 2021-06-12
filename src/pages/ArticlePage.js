import React from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../components/ArticleList.js";
import articles from "../data/articles.js";
import ArticleListPage from "./ArticleListPage.js";

//match parameter will be capture all path variable details
const ArticlePage = () => {
  //This is the path array
  let mypaths = useParams();
  console.log(mypaths);

  //Selecting the firsth path string from array
  let { path } = useParams();

  const resultArticle = articles.find((article) => article.name === path);

  if (!resultArticle) return <h1>Article does not exist!</h1>;

  const otherArticles = articles.filter((article) => article.name !== path);

  return (
    <>
      <h1>{resultArticle.title}</h1>
      {resultArticle.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <ArticleList articles={otherArticles}></ArticleList>
    </>
  );
};
export default ArticlePage;
