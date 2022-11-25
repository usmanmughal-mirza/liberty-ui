import "./nfts.css";

const nftsdata=[
    {
        img:"https://templatemo.com/templates/templatemo_577_liberty_market/assets/images/icon-02.png",
        heading:"Set Up Your Wallet",
        para:"NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.",
    },
     {
        img:"https://templatemo.com/templates/templatemo_577_liberty_market/assets/images/icon-03.png",
        heading:"Add Your Digital NFT",
        para:"There are 5 different HTML pages included in this NFT website template. You can edit or modify any section on any page as you required",
    },
     {
        img:"https://templatemo.com/templates/templatemo_577_liberty_market/assets/images/icon-04.png",
        heading:"Sell Your NFT & Make Profit",
        para:"If you check strong  would like to support our TemplateMo website, please visit our contact page to make a PayPal contribution. Thank you.",
    },
]

const Card =({card}) =>{

    return(
        <div className="nfts__contentcontainer-card">

            <div >
                <img src={card.img} alt="card__img" />
            </div>

            <div>
                <h4 className="fw-bold fs-500"> {card.heading} </h4>
                <p className=""> {card.para} </p>
            </div>

        </div>
    )
}

const NFTs = () => {
  return (
   <section className="nfts bg-primary-gradient text-transparent-500 padding-block-400">

    <div className="container nftbackground">

        <div className="nfts__primarycontent" >
            <h2 className="fs-secondary-heading">Create Your NFT & Put It On The Market. </h2>
            <button className="button">Create Your NFTS </button>
        </div>

        {/* cards container ----- */}
        <div className="nfts__contentcontainer">
            {nftsdata.map( (data,index) =>(
                <Card card={data} key={index} />
            ))}
        </div>

    </div>

   </section>
  )
}

export default NFTs