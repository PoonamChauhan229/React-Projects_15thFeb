import React, { useState } from 'react'

export default function SixthMovieCounter() {
    const [like,setLike]=useState(0)
    const [dislike,setDislike]=useState(0)
  return (
    <div className='randomclass'>
       <button onClick={()=>{setLike(like+1)}}>👍 {like}</button> 
       <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
    </div>
  )
}
