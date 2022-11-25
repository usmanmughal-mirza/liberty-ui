import "./card.css";
import {GrFormPrevious,GrFormNext} from "react-icons/gr";
import React, { useState } from 'react'


const Card = ({cardsdata}) => {
   const [currentIndex,setCurrentIndex]=useState(0);


    const goToPrevious =() =>{       
        const isFirstSlide=currentIndex === 0;
        const newIndex=isFirstSlide ?  cardsdata.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext =() =>{
        const isLastSlide=currentIndex === cardsdata.length - 1 ;
        const newIndex=isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

  return (
    <>
  

    {/*FOR  LARGE SCREEN --------------------------------- */}
    
    <div className="collectionsLgCardcontainer-largescreen">
       
       {cardsdata.map( (card) =>(
    <div className="collectionsLgCard  collectionsLgCard-lgscreen text-transparent-500">

      <div className="collectionsLgCard-imgcontainer">
        <img src={card.img} alt="card__img" />
      </div>
      

      <div className="collectionsLgCard-content | bg-dark-400" >
        <h4 className="fw-bold fs-500">{card.name} </h4>
        
        <div className="flex-justify" style={{paddingTop:"1rem"}}>
           
           <div>
             <p>Items In Collection: </p>
             <h4 className="fw-bold fs-500">{card.items} </h4>
          </div>

          <div>
            <p>Category </p>
            <h4 className="fw-bold fs-500">{card.category} </h4>
          </div>

        </div>

        <div style={{display:"flex",justifyContent:"center"}}>
          <button className="button">Explore More</button>
        </div>
        
      </div>

    </div>

      ))}
    </div>
   

   {/* FOR MEDIUM SCREENS ----------------------- */}
    
     <div className="collectionsLgCard  collectionsLgCard-mdscreen text-transparent-500">

       <div className="collectionsLgCard-imgcontainer">
         <img src={cardsdata[currentIndex].img} alt="card__img" />
          <button onClick={goToPrevious}>
             <span  className='flex'><GrFormPrevious className='icon' /> </span>
           </button>
            <button onClick={goToNext}> 
             <span className='flex'>    <GrFormNext className='icon' /> </span>
            </button>
       </div>
      
     
      <div className="collectionsLgCard-content | bg-dark-400" >
        <h4 className="fw-bold fs-500">{cardsdata[currentIndex].name} </h4>
        
        <div className="flex-justify" style={{paddingTop:"1rem"}}>
           
           <div>
             <p>Items In Collection: </p>
             <h4 className="fw-bold fs-500">{cardsdata[currentIndex].items} </h4>
          </div>

          <div>
            <p>Category </p>
            <h4 className="fw-bold fs-500">{cardsdata[currentIndex].category} </h4>
          </div>

        </div>

        <div style={{display:"flex",justifyContent:"center"}}>
          <button className="button">Explore More</button>
        </div>
        
      </div>

    </div>

    {/* ----------------------------------------------------- */}



    </>
  )
}

export default Card