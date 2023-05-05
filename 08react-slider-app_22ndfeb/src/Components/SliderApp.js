import React, { useState } from 'react'
import Title from './Title'
import SliderComp from './SliderComp'

const SliderApp = () => {
  const [slideValue,setSlideValue]=useState(0)

  const handleSliderValueChange=(e)=>{
    setSlideValue(e.target.value)
    console.log(e.target.value)
  }

  let bgColor;
  let textColor;
  if(slideValue<25){
    bgColor="red"
    textColor="white"
  }
  
  if(slideValue>25 && slideValue<=50){
    bgColor="blue"
  }

  if(slideValue>=51 && slideValue<=75){
    bgColor="green"
    textColor="black"
  }
if(slideValue>75){
    bgColor="orange"
    textColor="black"
  }
  if(slideValue==100){
    bgColor="red"
    textColor="red"
  }
  return (
    <div className='container text-center w-50'>
        <Title text={"Slide to grow"}/>
        <SliderComp slideValue={slideValue}
        handleSliderValueChange={handleSliderValueChange}
        bgColor={bgColor}
        textColor={textColor}
        />
    </div>
  )
}

export default SliderApp