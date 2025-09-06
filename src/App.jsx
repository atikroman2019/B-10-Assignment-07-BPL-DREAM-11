import { useState } from 'react';
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Players from './Components/Players/Players';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {

        const [coins, setCoins] = useState(0)
  
    const handleClaim = () => {
      const coinsAdd = 500000;
      setCoins(prevCoins => prevCoins + coinsAdd);
    };




  return (
    <>
    <Header coins ={coins}></Header>
    <Banner handleClaim={handleClaim}></Banner>
    <Players></Players>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </>
  )
}

export default App
