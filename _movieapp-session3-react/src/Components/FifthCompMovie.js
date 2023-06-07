import React, { useState } from 'react'
import SixthMovieCounter from './SixthMovieCounter'

export default function FifthCompMovie({moviedetails}) {
  // Conditional Styling we have used here to color 
  const myStyles={
    color:moviedetails.rating>8?"green":"red",
  }
  const [show,setShow]=useState(false)

  function display(){
    setShow(!show)
  }
  return (
    <div className='movieDiv'>
        <img className="movieimg" src={moviedetails.movieposter} alt="" />
        <div class="secflex">
        <p className='font'>{moviedetails.moviename}
        <span onClick={display}>{show ? '🔽' : '🔼'}</span>
        </p>
        
        <p style={myStyles}>⭐<b>{moviedetails.rating}</b></p>
        </div>
        {/* <button onClick={()=>{setShow(!show)}}>Toggle Summary</button> */}
        {/* <button onClick={display}>Toggle Summary</button> */}

        {/* Conditional rendering */}
        {show && <p className='summary'>{moviedetails.summary}</p>}
        <SixthMovieCounter/>
    </div>
  )
}

