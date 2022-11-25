import "./collection.css";
import CardSm from "./CardSm/Card";
import CardLg from "./CardLg/Card";
import {cardsmdata,cardlgdata} from "../../data/collections";



const Collections = () => {
  return (
    <section className="collections bg-dark-600 padding-block-400">
      <div className="container">

      <div >
          {/* small card ----- */}
       <div className="collections__cardsmcontainer" >
       
        <div className="collections__cardsmcontainer-heading">
           <h2 className="text-transparent-500 fs-secondary-heading">Browse Through Our <strong className="text-primary-500 fw-bold"> Categories </strong> Here. </h2>
        </div>
       
       <div className="padding-block-350">
  
        {cardsmdata.map( (data,index) =>(
          <CardSm key={index} card={data} />
        ))}
        
      </div>
      
      </div>
   

      {/* large card -------------- */}
      <div className="collections__cardlgcontainer" >
          <div className="collections__cardlgcontainer-heading">
           <h2 className="text-transparent-500 fs-secondary-heading">Explore Some Hot <strong className="text-primary-500 fw-bold">Collections</strong> In Market. </h2>
        </div>

         <div className="padding-block-350">

         <CardLg   cardsdata={cardlgdata}  />
    
      </div>

      </div>
     
      </div>
      </div>
    </section>
  )
}

export default Collections