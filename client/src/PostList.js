import React, {useState, useEffect} from 'react'
import axios from 'axios'

function PostList() {
const [posts, setPosts] = useState({})

const fetchPost = async() => {

    const res = await axios.get('http://localhost:4000/post')

    setPosts(res.data)
}


useEffect(() => {
    fetchPost()
}, []);
console.log(posts)

// const renderedPost = Object.value(posts).map(post => {
//     return <div className='card' style={{ width: '30%',marginBottom: '20px' }}>
//         key={post.id}
//         <div className='card-body'>
//             <h3>{post.title}</h3>
//         </div>
//     </div>
// })


  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
   
    </div>
  )
}

export default PostList