import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          alt=""
          fill
          src="https://images.pexels.com/photos/21031988/pexels-photo-21031988/free-photo-of-a-blurry-photograph-of-a-sunset-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className={styles.textContainer}>
        <h1>Title</h1>
        <div className={styles.detail}>
          <Image
            height={50}
            width={50}
            alt=""
            src="https://gfx.rozrywka.radiozet.pl/var/g3-radiozetrozrywka/storage/images/plotki/piorunujaca-przemiana-gohy-magical-tak-zmienili-ja-przed-clout-mma/22681849-1-pol-PL/Piorunujaca-przemiana-Gohy-Magical.-Tak-zmienili-ja-przed-Clout-MMA_content.webp"
          />
          <div className={styles.detailText}>
            <span className={styles.detailsTitle}>Author</span>
            <span className={styles.detailValue}>Gosia Zwierzynska</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailsTitle}>Published</span>
            <span className={styles.detailValue}>27.04.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          cumque!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
