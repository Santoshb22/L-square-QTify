import React from 'react'
import navLeft from "../../assets/navigation-prev.svg"
import styles from "./NavigationLeft.module.css"
const NavigationLeft = () => {
  return (
    
        <img className={styles.navigationLeft} src={navLeft} alt="Navigation Button" />
    
  )
}

export default NavigationLeft