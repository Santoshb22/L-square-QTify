import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import axios from "axios";

const Section = () => {
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

    if (!cardsData) {
        return <p>Loading...</p>;
    }


    return (
        <div className={styles.cardSection}>
            <div className={styles.cardsHeader}>
                <p className={styles.title}>Top Albums</p>
                <button className={styles.collapseButton}>Collapse</button>
            </div>

            <div className={styles.cardsGrid}>
                {cardsData.map(item => (
                    <Card key={item.id} albumData={item} />
                ))}
            </div>
        </div>
    );
}

export default Section;
