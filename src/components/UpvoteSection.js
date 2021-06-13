import React from "react";
import "../App.css";

const UpvoteSection = ({ articleName, upvote, setArticleInfo }) => {
  const upvoteFunction = async () => {
    console.log("upvote article ", articleName);
    const requestOptions = {
      method: "POST",
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
      `/api/articles-withdb-common/${articleName}/upvote`,
      requestOptions
    );
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteFunction()}>Add vote</button>
      <p>This post has been upvoted {upvote} times</p>
    </div>
  );
};

export default UpvoteSection;
