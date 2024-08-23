import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar({ searchData }) {
  const navigate = useNavigate()
  return (
    <nav className={styles.navbar}>
      <Logo onClick = {() => {navigate("/")}}/>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
