import React from 'react'
import styles from "./Card.module.css"
import Chip from '@mui/material/Chip';
const Card = ({songData}) => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.topSection}>
            <div className={styles.cardImage}>
              <img src={songData.image} alt="song img" />  
            </div>
            <div className={styles.chipContainer}>
                <Chip className={styles.followChip}
                 label="100 Follows"
                />
            </div>
        </div>

        <div className={styles.cardTitle}>
            {songData.title}
        </div>
    </div>
  )
}

export default Card