

const Counter = ({count,setCount}) => {
    console.log(count)
    const counterStyle={
      marginTop:"20%"
    }
 
  return (
    <div style={counterStyle}>
      <button  style={{padding:"5px 25px",marginRight:"5px"}}type="button" class="btn btn-primary btn-sm"
      onClick={()=>setCount(count+1)}
      >
        +
      </button>
      <button style={{padding:"5px 25px"}}type="button" class="btn btn-secondary btn-sm"
       onClick={()=>setCount(count-1)}
      >
        -
      </button>
    </div>
  );
};
export default Counter;
