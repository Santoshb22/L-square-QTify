import React, { useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Feedback from "../Feedback/Feedback";

function Navbar({ searchData }) {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    console.log("Clicked")
    setShowModal(!showModal);
  }

  return (
    <nav className={`${styles.navbar}`}>
      <Link to={"/"} className={styles.logo}>
      <Logo/>
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button onClick = {handleShowModal} >Give Feedback</Button>
      <Feedback showModal = {showModal} handleShowModal = {handleShowModal}/>
    </nav>
  );
}

export default Navbar;
