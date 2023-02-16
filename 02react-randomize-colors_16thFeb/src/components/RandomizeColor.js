import Title from "./Title";

const RandomizeColor = () => {
  const btnStyles = {
    padding: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    marginRight: "10px",
  };
  function colorChange(e){
    console.log("color changed")   
    console.log(e.target)   
    let body=document.querySelector('body')
    body.style.backgroundColor=getRandomColor()
    console.log(body)
    e.target.style.backgroundColor=getRandomColor()
  }
  function colorChangenew(e){
    console.log("color changed")   
    console.log(e.target)   
    let body=document.querySelector('body')
    body.style.backgroundColor=getRandomColor()
    console.log(body)
    e.target.style.backgroundColor=getRandomColor()
  }
const colorChangenewone=(e)=>{
    console.log("color changed")   
    console.log(e.target)   
    let body=document.querySelector('body')
    body.style.backgroundColor=getRandomColor()
    console.log(body)
    e.target.style.backgroundColor=getRandomColor()
  }

  function getRandomColor(){
    let letters="0123456789ABCDEF"
    let colors="#"
    for(let i=0;i<6;i++){
        colors+=letters[Math.floor(Math.random()*16)]
    }
    return colors;
  }
  return (
    <>
      <Title text={"Randomize Color"} />
      <div>
        <button style={btnStyles}
        onClick={colorChange}
        >Click Me</button>
        <button style={btnStyles}
        onClick={(e)=>colorChangenew(e)}>Try Me</button>
        <button style={btnStyles}
        onClick={colorChangenewone}
        >Mee Too</button>
        <button style={btnStyles}
         onClick={colorChangenewone}>Even Me</button>
      </div>
    </>
  );
};
export default RandomizeColor;
