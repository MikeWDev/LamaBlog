import Image from "next/image";
import styles from "./home.module.css";
import brandImg from "../../public/brands.png";
import heroImg from "../../public/hero.gif";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam
          ratione reprehenderit accusantium nam minus vel, sit culpa eum
          doloremque!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brand}>
          <Image src={brandImg} alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={heroImg} alt=" " fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
