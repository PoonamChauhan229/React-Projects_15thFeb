import { useState,useEffect } from "react";

const Alert = ({ type, message,delay=false }) => {
    const [showAlert,setshowAlert]=useState(true)
    const closeAlert=(e)=>{
        console.log(e.target.parentElement)
        //console.log(e.target.parentElement.parentElement)
        e.target.parentElement.parentElement.classList.add("fade")             
    }
    useEffect(()=>{ delay &&
        setTimeout(()=>{
            setshowAlert(false)
            console.log(showAlert)
        },2000)  
    })
  return (  
     (showAlert && <div className="container">
        <div className={`alert alert-${type} alert-dismissible`} role="alert">
          {message}

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={closeAlert}
          ></button>
        </div>
      </div>)   
  );
};
export default Alert;
