import React, { useEffect } from 'react'
import styles from "./Feedback.module.css"

const Feedback = ({showModal, handleShowModal}) => {
    
    const toggleModal = showModal === false? styles.modalHidden : styles.modalVisible;

    useEffect(() => {
      if(showModal) {
        document.body.classList.add("no-scroll")
      }else {
        document.body.classList.remove("no-scroll");
      }

      return () => document.body.classList.remove("no-scroll")
    })

  return (
<div className={showModal ? styles.modalFeedback : styles.noModal}>
<div className={`${styles.modalContainer} ${toggleModal}`}>
        <p className={styles.heading}>Feedback <span className={styles.closeModal} onClick={handleShowModal}>x</span></p>

        <form className={styles.formContainer}>
            <input className={styles.feedbackInput} type="text" name="fullName" placeholder='Full name' />
            <input className={styles.feedbackInput} type="email" name="email" placeholder='Email ID' />
            <input className={styles.feedbackInput} type="text" name="subject" placeholder='Subject' />
            <textarea className={styles.textArea} name="description" placeholder='Description' maxLength={100}></textarea>

            <div className={styles.submitButtonContainer}>
            <button className={styles.submitButton} type='submit'>Submit Feedback</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Feedback