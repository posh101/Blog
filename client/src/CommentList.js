import React, {useEffect, useState} from 'react'
import axios from 'axios'

function CommentList({postId}) {
    const [comments, setComment] = useState([])

    const fetchComments = async() => {
     const res = await axios.get(`http://localhost:4001/posts/${postId}/ comments`)

     setComment(res.data)
    }

    useEffect(() => {
        fetchComments()
    })

    const renderedComments = comments.map(comment => {
        return <li>{comments.content}</li>
    })
  return (
    <div>
        <ul>{renderedComments}</ul>
    </div>
  )
}

export default CommentList