import React from 'react'
import styles from "./Card.module.css"
import Chip from '@mui/material/Chip';
const Card = ({albumData}) => {

  return (
    <div className={styles.cardContainer}>
        <div className={styles.topSection}>
            <div className={styles.cardImage}>
              <img src={albumData.image} alt="song img" />  
            </div>
            <div className={styles.chipContainer}>
            <Chip 
              className={styles.followChip}
              label={
                albumData.follows 
                  ? `${albumData.follows} follows` 
                  : `${albumData.likes} likes`
              }
            />
            </div>
        </div>

        <div className={styles.cardTitle}>
            {albumData.title}
        </div>
    </div>
  )
}

export default Card