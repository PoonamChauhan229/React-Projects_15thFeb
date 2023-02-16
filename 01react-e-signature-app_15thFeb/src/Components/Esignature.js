import { useState } from "react";
import Title from "./Title";

const Esignature = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  return (
    <>
      <Title text={name} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga sint
        magni recusandae dignissimos minima sequi cupiditate tenetur aperiam
        dolorem aliquam.
      </p>
      <Title text={!date?"DOB":date} />

      <input type="date" name="" id="" value={date}
      onChange={(e)=>{
        setDate(e.target.value)
      }}
      />
      <input type="text" name="" id="" value={name} 
      onChange={(e)=>{
        setName(e.target.value)
      }}
      />
    </>
  );
};
export default Esignature;
