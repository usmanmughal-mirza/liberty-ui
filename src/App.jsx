import {Footer,Collection,HeroSection,Items,NFTs} from "./components/index";

const App = () => {
  return (
    <div className="app">
      <HeroSection />
      <Collection />
      <NFTs />
      <Items />
      <Footer />
    </div>
  )
}

export default App