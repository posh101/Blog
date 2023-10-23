import React from 'react'

function postCreate() {
  return (
    <div>
        <form>
            <div className='form-group'>
            <label>Title</label>
            <input className='form-control'/>
            </div>
            <button className='btn btn-primary mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default postCreate