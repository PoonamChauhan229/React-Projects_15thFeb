import React,{useState} from 'react'
import ShowAllTask from './ShowAllTask';

export default function AddTask({tasklist,setTasklist}) {

    const [addTask,setAddTask]=useState("")
    
  return (
    <div className='container'>
        <input type="text" placeholder='AddTask' value={addTask} onChange={(e)=>{
            setAddTask(e.target.value)
        }}/>
        <button onClick={
            ()=>{
                // setTasklist([...tasklist,addTask])
                // console.log(tasklist)

                setTasklist(()=>{
                    const updatedList=[...tasklist,addTask]
                    console.log(updatedList)
                    setAddTask("")
                    return updatedList
                })
            }
        }
        
        >Add Button</button>
       
       {
        tasklist.map((element,index)=>(
            // <div key={index}>{element}</div>
            <ShowAllTask key ={index} list={element} id={index} tasklist={tasklist} setTasklist={setTasklist}/>
        ))
       }
    </div>
  )
}
