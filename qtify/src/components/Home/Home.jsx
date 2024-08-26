import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import Section from '../Section/Section'
import axios from 'axios';
import styles from "./Home.module.css";
import Accordian from '../Accordian/Accordian';

const Home = () => {

  const [tabs, setTabs] = useState([]);

  const fetchTabs = async () => {
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
      setTabs(response.data.data);
    } catch (error) {
      console.log("Unable to fetch tabs: ",error);
    }
  }


  useEffect(() => {
    fetchTabs();
  },[]);

  return (
    <div>
        <Hero/>

        <Section 
        sectionTitle="Top Albums" 
        fetchUrl="https://qtify-backend-labs.crio.do/albums/top" 
        toggleButton ={true}
        />
        <hr className={styles.lineBreak}/>
        <Section 
        sectionTitle="New Albums" 
        fetchUrl="https://qtify-backend-labs.crio.do/albums/new" 
        toggleButton ={true}
        />
        <hr className={styles.lineBreak}/>
        <Section 
        sectionTitle="Songs" 
        fetchUrl="https://qtify-backend-labs.crio.do/songs" 
        toggleButton ={false}
        tabs = {tabs}
        />
        <hr className={styles.lineBreak}/>

        <div className={styles.accordian}>
          <Accordian/>
        </div>
    </div>
  )
}

export default Home