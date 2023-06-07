import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';

function App() {

  const initialTasklist=[];
    const [tasklist,setTasklist]=useState(initialTasklist)
    function removeAll(){
      console.log("remmoved")
      setTasklist(initialTasklist)
    }
  return (
    <div className="App">
      <div className='textshadow'>
      <AddTask tasklist={tasklist} setTasklist={setTasklist}/>
      {tasklist.length>1 && <button onClick={removeAll}>Remove All</button>}
    </div>
      </div>
  );
}

export default App;
