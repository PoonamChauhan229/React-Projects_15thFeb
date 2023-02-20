import Counter from "./Counter";
import { useState } from "react";
const Temperature=()=>{

    const [count,setCount]=useState(0)
    const styles={
        border:"1px solid black",
        width:"150px",
        height:"150px",
        borderRadius:"50%",
        position:"relative",
        left:"13%",
        top:"25px",
        backgroundColor:count>0?"green":"red",
        color:"white"
    }
    const pos={
        position:"absolute",
        top:"50px",
        left:"55px",
        fontSize:"25px",
        fontWeight:"bold"
    }

    return(
        <>
        <div className="card shadow" style={{width:"200px",height:"250px",marginLeft:"40%"}}> 
            <div className="shadow" style={styles}>
                <div style={pos}>{count}°C</div>
            </div>  
            <Counter count={count} setCount={setCount}/>     
        </div>
        
        
        </>
    )
}
export default Temperature;