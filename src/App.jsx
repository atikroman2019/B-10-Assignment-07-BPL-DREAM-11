import { useState } from 'react';
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'

function App() {

        const [coins, setCoins] = useState(0)
  
    const handleClaim = () => {
      const coinsAdd = 500000; // amount of coins to add
      setCoins(prevCoins => prevCoins + coinsAdd);
    };




  return (
    <>
    <Header coins ={coins}></Header>
    <Banner handleClaim={handleClaim}></Banner>
    </>
  )
}

export default App
