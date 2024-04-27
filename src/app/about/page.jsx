import Image from "next/image";
import aboutImg from "../../../public/about.png";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About agency</h2>
        <h1>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We are worlds Our
          Speacial Team best consulting & finance solution provider. Wide range
          of web software development services
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={aboutImg} alt="About image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
