import React from 'react'

export default function ShowAllTask({id,list,tasklist,setTasklist}) {
  console.log(list) 
  console.log(tasklist) 
  // console.log(i)
  function removeOne(i){
    console.log(i)
    const updatedlist=tasklist.filter((element,idx)=>{
      return i!=idx
    })   
    setTasklist(updatedlist)
  }
  
  return (
    <>
    { list!=""&&<div className='flex'>
                  <p>{list}</p>
                  <button onClick={()=>removeOne(id)}>Remove(-)</button>
      </div>}    
         
    </>
  )
}
