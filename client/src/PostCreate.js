import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function PostCreate() {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await axios.post('http://localhost:4000/post', {
      title
    })

    setTitle('')
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label>Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} className='form-control'/>
            </div>
            <button className='btn btn-primary mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default PostCreate