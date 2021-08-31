import React , { useState } from 'react'
import ControlledTour from './Components/ControlledTour'
import TourSteps from './TourSteps/TourSteps';

export default function App() {

  const [myIndex, setMyIndex] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const toggleVisibility = () => {
    setIsTourOpen(!isTourOpen);
  }

  const proceed = (myValue) => {
    console.log(myValue);
    setMyIndex(myIndex + 1);
  }

  const decrease = () => {
    setMyIndex(myIndex - 1);
  }


  return (
    <>
      <div id='x'>
        <button className='button' id = 'btn1' onClick={proceed}>button 1</button>
        <button className='button' id = 'btn2' onClick={proceed}>button 2</button>
        <button className='button' id = 'btn3' onClick={proceed}>button 3</button>
        <button className='button' id = 'btn4' onClick={proceed}>button 4</button>
        
      </div>
      <div id = 'y'>
        <button id = 'tour_button' onClick = {toggleVisibility}>Tour start</button>
        {  isTourOpen ? <ControlledTour TOUR_STEPS = {TourSteps} onClose = {toggleVisibility} /> : null}
      </div>
    </>
  )
}