import React from 'react'

const Title = ({text}) => {
  return (
    <div>
      <h1>{!text?"Title":text}</h1>
    </div>
  )
}

export default Title