import React, { useState, useEffect} from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

   const fetchData = async() => {
    const res = await axios.get( `http://localhost:4001/post/${postId}/comments`);

    setContents(res.data);
  };

  const renderedComments = Object.keys(contents).map((content) => {
    return <li key={content.id}>{content.comments}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
