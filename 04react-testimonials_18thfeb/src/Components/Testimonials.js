import Button from "./Button";
import Title from "./Title";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState();
 
  useEffect(() => {
    if(testimonials!==undefined){
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
    .then(response => response.json())
    .then(json => setItems(json));
  }    
},[testimonials]);
  return (
    <div>           
      <Title text={"Testimonials App"} />
      <Button
        classes={"btn-primary me-2"}
        text={"Posts"}
        icon={<BsFillFileEarmarkPostFill className="me-2" />}
        onClick={() => setTestimonials("Posts")}
      />{" "}
      <Button
        classes={"btn-secondary me-2"}
        text={"Users"}
        icon={<FaUserAlt className="me-2" />}
        onClick={() => setTestimonials("Users")}
      />{" "}
      <Button
        classes={"btn-success"}
        text={"Comments"}
        icon={<BiCommentDetail className="me-2" />}
        onClick={() => setTestimonials("Comments")}
      />
      <Title text={!testimonials ? "Select from the above" : testimonials} />   
  
      {!items ? null:items.map((element)=>{
        return <div class="card mb-4" style={{width:"35rem",marginLeft:"32%"}}>
            {element.title && <div class="card-header">{element.title}</div>}
            {element.body && <div class="card-header">{element.body}</div>}
            {element.name && <div class="card-header">UserName:{element.name}||Email"{element.email}</div>}
          </div>;         
        
      })
    }
    
    </div>
  );
    }
export default Testimonials;
