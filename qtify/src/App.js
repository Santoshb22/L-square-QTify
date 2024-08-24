import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'

const App = () => {
  const [cardsData, setCardsData] = useState([]);

  const fetchCardsData = async () => {
      console.log("Fetching data...");
      try {
          const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
          console.log("API response received:", response.data);
          setCardsData(response.data); 
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  }


  useEffect(() => {
      fetchCardsData();
  }, []);
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Section data = {cardsData}/>
      {/* <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes> */}
    </div>
  )
}

export default App