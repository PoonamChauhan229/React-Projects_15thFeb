import Title from "./Title";
import { AiFillSmile,AiFillHeart,AiOutlineComment,AiOutlineHeart} from "react-icons/ai";
import { useState } from "react";
const Like = () => {
    const iconStyle={
        height: "60px",
         fontWeight:"bold",
         fontSize:"48px"
    }
    const [like,setLike]=useState(false)
    const [count,setCount]=useState(0)
    
    const toggleLike=()=>{
        if(!like){
            setLike(true)
            setCount(count+1)
        }else{
            setLike(false)
            setCount(count-1)
        }
    }
  return (
    <div className="App">
      <div>
        <Title text={"Like My Photo" }/>
        <Title text={`Likes ${count}`} />
      </div>

      <div class="card border shadow" style={{ width: "20rem" }}
      onDoubleClick={toggleLike}
      >
        <div
          className="bg-secondary"
          style={{ width: "20rem", height: "60px", paddingTop:"13px",fontWeight:"bold" }}
        >
          <AiFillSmile className="fs-2 text-white" />
          <span className="fs-5 text-white"> Doggy Dog</span>
        </div>
        <img
          src="https://toppng.com/uploads/preview/cute-dog-11549895760lohnjwitxd.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body p-0">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-between bg-secondary text-white">
            <span>
              <AiOutlineComment className="text-white" style={iconStyle}/>
            </span>
            <span>
              {like ?<AiFillHeart className="text-danger" style={iconStyle} onClick={toggleLike}/>:
              <AiFillHeart className="text-white" style={iconStyle} onClick={toggleLike}/>
              }
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Like;
