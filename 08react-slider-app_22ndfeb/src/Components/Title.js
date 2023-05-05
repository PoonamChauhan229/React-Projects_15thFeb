import React from 'react'

const Title = ({text}) => {
  return (
    <div>
        <h1>{!text?"Text":text}</h1>
    </div>
  )
}

export default Title