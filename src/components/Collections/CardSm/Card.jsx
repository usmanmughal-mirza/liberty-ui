import "./card.css";

const CardSm = ({card}) => {

  return (
      
      <div className='collectionsSmCard | bg-dark-400'>
        
        <div className="collectionsSmCard-img">
          <img src={card.img} alt="cardsm-img" />
        </div>
       
        <div>
          <h4 className='text-transparent-500 fw-semi-bold  fs-500'>{card.name}  </h4>
        </div>
      
      </div>

   
  )
}

export default CardSm