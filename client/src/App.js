import React from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'


function App() {
  return (
    <div className='container'>
      <h1>Create post</h1>
      <PostCreate/>
      <hr/>
      <h3>Post</h3>
      <PostList/>
    </div>
  )
}

export default App