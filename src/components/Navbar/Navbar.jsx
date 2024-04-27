import React from "react";
import Links from "./Links/Links";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <nav>
        <Links />
      </nav>
    </div>
  );
};

export default Navbar;
