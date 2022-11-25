import React, { useState } from 'react'
import {slides} from "../../data/slides";
import {GrFormPrevious,GrFormNext} from "react-icons/gr";
import "./slider.css";

const Slider = () => {
    const [currentIndex,setCurrentIndex]=useState(0);


    const goToPrevious =() =>{       
        const isFirstSlide=currentIndex === 0;
        const newIndex=isFirstSlide ?  slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext =() =>{
        const isLastSlide=currentIndex === slides.length - 1 ;
        const newIndex=isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }


    // setTimeout (() => {
    //     const isFirstSlide=currentIndex === 0;
    //     const newIndex=isFirstSlide ?  slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);

    // },4000)
    
  return (
    <div className='slider '>
        <div className="slider-img">
            <img src={slides[currentIndex].url} alt="slider-img" />
        </div>
        <div className="slider-btns | padding-block-300 flex">
            <button onClick={goToPrevious}>
             <span  className='flex'><GrFormPrevious className='icon' /> </span>
            </button>
            <button onClick={goToNext}> 
             <span className='flex'>    <GrFormNext className='icon' /> </span>
              </button>
        </div>
    </div>
  )
}

export default Slider