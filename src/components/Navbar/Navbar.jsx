import React from "react";
import Links from "./Links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";
const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lama
      </Link>
      <nav>
        <Links session={session} />
      </nav>
    </div>
  );
};

export default Navbar;
