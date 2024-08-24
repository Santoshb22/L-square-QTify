import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import axios from "axios";

const Section = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);

    const fetchTopAlbums = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
            setTopAlbums(response.data);
        } catch (error) {
            console.error("Error fetching top albums:", error);
        }
    }

    const fetchNewAlbums = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
            setNewAlbums(response.data);
        } catch (error) {
            console.error("Error fetching new albums:", error);
        }
    }

    useEffect(() => {
        fetchTopAlbums();
        fetchNewAlbums();
    }, []);

    if (!topAlbums || !newAlbums) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.cardSection}>
            <div className={styles.cardsHeader}>
                <p className={styles.title}>Top Albums</p>
                <button className={styles.collapseButton}>Collapse</button>
            </div>

            <div className={styles.cardsGrid}>
                {topAlbums.map(item => (
                    <Card key={item.id} albumData={item} />
                ))}
            </div>

            <div className={styles.cardsHeader}>
                <p className={styles.title}>New Albums</p>
                <button className={styles.collapseButton}>Collapse</button>
            </div>

            <div className={styles.cardsGrid}>
                {newAlbums.map(item => (
                    <Card key={item.id} albumData={item} />
                ))}
            </div>
        </div>
    );
}


export default Section