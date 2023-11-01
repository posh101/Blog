import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  let fetchData = useCallback(() => {

  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

   fetchData = async() => {
    const res = await fetch( `http://localhost:4001/post/${postId}/comments`);

    setComments(res.data);
  };

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
