import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

const PostUser = async ({ userid }) => {
  const user = await getUser(userid);
  console.log(user);
  return (
    <>
      <Image height={50} width={50} alt="" src={user.img} />
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.userName}>{user.username}</span>
      </div>
    </>
  );
};

export default PostUser;
