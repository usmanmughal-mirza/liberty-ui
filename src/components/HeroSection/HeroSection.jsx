
import "./herosection.css";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";

const HeroSection = () => {
  return (
    <section className="hero">
      <Navbar />
      {/* header ------- */}
      <div className="header padding-block-800 padding-block-900" >
        <div className="container">

          <div className="header-subcontainer">

         {/* content --- */}
          <div className="header-content">
            <h3 className="text-transparent-500 fw-semi-bold fs-500"> Liberty NFT Market </h3>
            <h1 className="fs-primary-heading text-transparent-500 fw-bold padding-block-200">Create, Sell & Collect Top NFTs. </h1>
            <p className="text-transparent-500 fw-regular">Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates. </p>
            
             <div className="header-btn | padding-block-300">
            <button className="button">Explore Top NFTs</button>
            <button className="button">Watch our videos</button>
            </div>

          </div>
          {/* slider ------ */}
          <div>
            <Slider />
          </div>

        </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection