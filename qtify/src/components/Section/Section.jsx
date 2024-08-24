import React from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";

const Section = ({data}) => {
    if (!data || !data[0] || !data[0].songs) {
        return <p>Loading...</p>;
    }


    return (
        <div className={styles.cardSection}>
            <div className={styles.cardsHeader}>
                <p className={styles.title}>Top Albums</p>
                <button className={styles.collapseButton}>Collapse</button>
            </div>

            <div className={styles.cardsGrid}>
                {data[0].songs.map(item => (
                    <Card key={item.id} songData={item} />
                ))}
            </div>
        </div>
    );
}

export default Section;
