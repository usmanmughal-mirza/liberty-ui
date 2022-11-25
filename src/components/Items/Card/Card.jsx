import "./card.css";

const Card = ({card}) => {
  return (
    <div className="items-card | text-transparent-500 bg-dark-400">
      {/* img container  */}
      <div className="items-card__imgcontainer">
        <img src={card.img} alt="card_img" />
      </div>

      {/* content  */}
      <div className="items-card__content">
        {/* upper div  */}
        <div className="items-card__content-upperdiv">
          <h4 className="fs-500 fw-bold">{card.name }</h4>
         
          <div className="flex-justify padding-block-300">
            <img src="https://media.istockphoto.com/id/911053906/photo/digital-chain-blockchain-technology-concept.jpg?b=1&s=612x612&w=0&k=20&c=sSD2vRbQnu2slc4F02r9Qvm2JKGpTkpPy235fye4Hew=" 
            alt="blockchain-man" />
            <span>
              <p> Liberty Artist</p>
              <p className="text-primary-500">@libertyart</p>
            </span>
          </div>

        </div>
        {/* -----*/}
        <div className="items-card__content-lowerdiv |  padding-block-300">
          <p>Current Bid </p>
          <h5 className="fs-500 fw-bold padding-block-100">2.03 ETH </h5>
          <p>($8,240.50) </p>
          <button className="button">View Item Details</button>
           
        </div>
        {/* lower div end */}

      </div>
      {/* ---- content end */}
    </div>
  )
}

export default Card