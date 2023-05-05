import React from 'react'


const SliderComp = ({slideValue,handleSliderValueChange,bgColor,textColor}) => {
  // console.log(bgColor,textColor)
  // console.log(!bgColor?"yellow":{bgColor})

  const sliderStyle={
    appearance:"none",
    width:"100%",
    height:15,
    background:"lightgray",
    cursor:"pointer",
    opacity:"0.7",
    
  }
  return (
    <div className='container d-flex flex-column text-center' style={{gap:100}}>
        <input type="range"
        min="0"
        max={100}
        value={slideValue}
        style={sliderStyle}
        onChange={handleSliderValueChange}
        />
          <div
          className='container'
            style={{
              color:!textColor?"yellow":textColor,
              height:`${slideValue}px`,
              width:`${slideValue}px`,
              background:!bgColor?"lightgray":bgColor,
              fontWeight:600,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              borderRadius:"50%"
            }}
          >
            <span>{slideValue}</span>
          </div>
    </div>
  )
}

export default SliderComp