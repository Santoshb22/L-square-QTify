import React from 'react'
import styles from "./AlbumDetail.module.css"
import backIcon from "../../assets/back-icon.png"
import addToLibraryIcon from "../../assets/addToLibrary-icon.png"
import shuffleIcon from "../../assets/shuffle.png"

const AlbumDetail = () => {
  return (
    <div className={styles.albumDetail}>
        <img className={styles.backButton} src={backIcon} alt="back button" />

        <div className={styles.mainSong}>
            <img className={styles.musicImage} src="https://images.pexels.com/photos/26893039/pexels-photo-26893039/free-photo-of-portrait-of-a-macaque-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <div className={styles.musicDetail}>
                <h2>Best of the Meloni Bae in 2024</h2>
                <p>Catch the most romantic punjabi tracks of 2022 #SpotifyWrapped</p>
                <p>2024</p>
                <p>75Songs 3 hr 45 min 100 follows</p>

                <div className={styles.musicDetailFooter}>
                    <button className={styles.shuffleButton}> <img src={shuffleIcon} alt="shuffle icon" /> Shuffle</button>
                    <button className={styles.addToLibrary}> <img src={addToLibraryIcon} alt="add to library icon" /> Add To Library</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlbumDetail