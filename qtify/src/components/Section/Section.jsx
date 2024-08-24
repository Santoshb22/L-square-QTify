import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import axios from "axios";
import Carousel from "../Carousel/Carousel";

const Section = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [carouselToggleTopAlbum, setCarouselToggleTopAlbum] = useState("Collapse");
    const [carouselToggleNewAlbum, setCarouselToggleNewAlbum] = useState("Collapse")
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

    const handleCarouselToggle = () => {
        if(carouselToggleTopAlbum === "Collapse") {
            setCarouselToggleTopAlbum("Show all");
        } else {
            setCarouselToggleTopAlbum("Collapse");
        }
    }

    const handleCarouselToggleTopAlbum = () => {
        if(carouselToggleNewAlbum === "Collapse") {
            setCarouselToggleNewAlbum("Show all");
        } else {
            setCarouselToggleNewAlbum("Collapse");
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
            <div className={styles.topCardsSection}>
            <div className={styles.cardsHeader}>
                <p className={styles.title}>Top Albums</p>
                <button className={styles.collapseButton} onClick={handleCarouselToggle}>{carouselToggleTopAlbum}</button>
            </div>

            {
            carouselToggleTopAlbum === "Collapse"? (
            <div className={styles.cardsGrid}>
                {topAlbums.map(item => (
                    <Card key={item.id} albumData={item} />
                ))}
            </div>
                ) : (
                    <div>
                        <Carousel albumData = {topAlbums}/>
                    </div>
                )
            }
            </div>

            <div className={styles.bottomCardsSection}> 
            <div className={styles.cardsHeader}>
                <p className={styles.title}>New Albums</p>
                <button className={styles.collapseButton} onClick={handleCarouselToggleTopAlbum}>{carouselToggleNewAlbum}</button>
            </div>

            {
                carouselToggleNewAlbum === "Collapse"? (
                    <div className={styles.cardsGrid}>
                {newAlbums.map(item => (
                    <Card key={item.id} albumData={item} />
                ))}
            </div>
                ) :(
                    <div>
                        <Carousel albumData={newAlbums}/>
                    </div>
                )
            }
            </div>
        </div>
    );
}


export default Section