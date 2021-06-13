import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../components/ArticleList.js";
import CommentsList from "../components/CommentsList.js";
import UpvoteSection from "../components/UpvoteSection.js";
import AddCommentForm from "../components/AddCommentForm.js";
import articles from "../data/articles.js";

//match parameter will be capture all path variable details
const ArticlePage = () => {
  //This is the path array
  let mypaths = useParams();
  console.log(mypaths);

  //Selecting the firsth path string from array
  let { path } = useParams();

  //to fetch data from node server we use fetch and hooks useState
  /**This means we useState
   * articleInfo to keep article data after we called to server
   * setArticleInfo to change the state of articleInfo
   * default value (initial value) of articleInfo { upvote: 0, comments: [] } object
   */
  const [articleInfo, setArticleInfo] = useState({ upvote: 0, comments: [] });

  //to make some event changes to and make articleInfo populate we use useEffect
  /**This is to maintain all side effects fetching data and display
   * the arrayList after the function are the values to be changed in order to
   * execute the useEffect, if we leave it empty it will call only one time when the page loads.
   * To make the CORS error update package.json with proxy
   */
  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
      };
      /**const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id })); */
      const result = await fetch(
        `/api/articles-mongodb-onfly/${path}`,
        requestOptions
      );
      console.log("result", result);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [path]);

  const resultArticle = articles.find((article) => article.name === path);

  if (!resultArticle) return <h1>Article does not exist!</h1>;

  const otherArticles = articles.filter((article) => article.name !== path);

  return (
    <>
      <h1>{resultArticle.title}</h1>

      <UpvoteSection
        articleName={path}
        upvote={articleInfo.upvote}
        setArticleInfo={setArticleInfo}
      ></UpvoteSection>

      {resultArticle.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

      <AddCommentForm
        articleName={path}
        setArticleInfo={setArticleInfo}
      ></AddCommentForm>
      <CommentsList comments={articleInfo.comments}></CommentsList>

      <h4>Other Articles</h4>
      <ArticleList articles={otherArticles}></ArticleList>
    </>
  );
};
export default ArticlePage;
