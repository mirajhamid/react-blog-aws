import React from "react";
import "../App.css";

const CommentsList = (props) => {
  let comments = props.comments.map((comment, key) => {
    return (
      <div className="comment" key={key}>
        <h4>{comment.userName}</h4>
        <p>{comment.commentText}</p>
      </div>
    );
  });

  return (
    <>
      <h3>Comments:</h3>
      {comments}
    </>
  );
};

export default CommentsList;
