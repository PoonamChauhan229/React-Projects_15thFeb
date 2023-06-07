import React from 'react'

export default function ProductDispplay(props) {
    console.log(props)
  return (
    <div  class="card-group"> 
        {
            props.proddata.map((item)=>(
                <div key={item.id}>
                <div class="card m-3" style={{width: "18rem"}}>
                <img src={item.image} class="card-img-top" alt="..."style={{height:"15rem"}}/>
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{item.brand}</li>
                    <li class="list-group-item">{item.cost}</li>
                    <li class="list-group-item">{item.form}</li>
                </ul>
                </div>
                </div>
            ))
        }
    </div>
  )
}
