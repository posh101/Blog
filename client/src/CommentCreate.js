import React, {useState} from 'react'
import axios from 'axios'

function CommentCreate({postId, content}) {
    const [contents, setContents] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault()
     await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content
     })
     setContents('')
    }
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label>Comments</label>
            <input value={contents}
            onChange={e => setContents(e.target.value)}
            className='form-control'/>
            </div>
            <button className='btn btn-primary mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default CommentCreate