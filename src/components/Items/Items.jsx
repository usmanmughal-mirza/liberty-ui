import Card from "./Card/Card";
import "./items.css";
import {itemsdata} from "../../data/items";
import { useState } from "react";


const Items = () => {
const [data,setData]=useState(itemsdata);


const filterItems =(e) =>{
  const {name}=e.target;
if(name === "all" ) return setData(itemsdata);  
const res= itemsdata.filter( (todo) =>todo.category === name );
setData(res);
}

  return (
   <section className="itemscollection bg-dark-600 padding-block-400">
    <div className="container">
      
      <div className="padding-block-300">
        <h2 className="text-transparent-500 fs-secondary-heading"><strong className="text-primary-500">Items  </strong> Currently In The Market. </h2>
      </div>

      <div className="items-btncontainer padding-block-300">
        <button className="button" name="all" onClick={filterItems}>All Items</button>
        <button className="button" name="digital" onClick={filterItems}>Digital Art </button>
        <button className="button" name="blockchain" onClick={filterItems}>Blockchain </button>
        <button className="button" name="virtual"  onClick={filterItems}>Virtual</button>
        <button className="button" name="solidity" onClick={filterItems}> Solidity </button>
      </div>

      {/* card container -------------------- */}
      <div className="itemscard-container">
        {data.length === 0 ? <h2 className="text-transparent-500">No Item Is Present </h2> :(
          <>
           {data.map( (data,index) =>(
          <Card key={index} card={data} />
          ))}
          </>
        )}
       
      </div>

    </div>

   </section>
  )
}

export default Items