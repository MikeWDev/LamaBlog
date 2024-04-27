import React from "react";
import Links from "./Links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lama
      </Link>
      <nav>
        <Links />
      </nav>
    </div>
  );
};

export default Navbar;
