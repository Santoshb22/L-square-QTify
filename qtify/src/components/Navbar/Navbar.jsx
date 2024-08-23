import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to={"/"} className={styles.logo}>
      <Logo/>
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
