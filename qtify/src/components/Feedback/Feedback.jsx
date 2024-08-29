import React, { useEffect, useState } from 'react'
import styles from "./Feedback.module.css"

const Feedback = ({showModal, handleShowModal}) => {
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    description: "",
  });

 const handleInputChange = (e) => {

  const {name, value} = e.target;

  setFormData((prevData) => ({
    ...prevData, [name]: value,
  }))
 }

    const toggleModal = showModal === false? styles.modalHidden : styles.modalVisible;

    useEffect(() => {
      if(showModal) {
        document.body.classList.add("no-scroll")
      }else {
        document.body.classList.remove("no-scroll");
      }

      return () => document.body.classList.remove("no-scroll")
    })

    const handleSubmitFeedback = (e) => {
      e.preventDefault();
      console.log(formData);
      window.alert("Thanks for your valuable feedback")
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        description: "",
      })

      handleShowModal();
    }

  return (
<div className={showModal ? styles.modalFeedback : styles.noModal}>
<div className={`${styles.modalContainer} ${toggleModal}`}>
        <p className={styles.heading}>Feedback <span className={styles.closeModal} onClick={handleShowModal}>x</span></p>

        <form className={styles.formContainer} onSubmit= {handleSubmitFeedback}>
            <input className={styles.feedbackInput} type="text" name="fullName" placeholder='Full name'  value={formData.fullName} onChange={handleInputChange}/>
            <input className={styles.feedbackInput} required type="email" name="email" placeholder='Email ID' value={formData.email} onChange={handleInputChange} />
            <input className={styles.feedbackInput}  type="text" name="subject" placeholder='Subject' value={formData.subject} onChange={handleInputChange} />
            <textarea className={styles.textArea} required name="description" placeholder='Description' maxLength={100} value={formData.feedback} onChange={handleInputChange} ></textarea>

            <div className={styles.submitButtonContainer}>
            <button className={styles.submitButton} type='submit' >Submit Feedback</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Feedback