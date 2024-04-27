import Image from "next/image";
import styles from "./contact.module.css";
import contactImg from "../../../public/contact.png";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={contactImg}
          className={styles.img}
          fill
          alt="contact image"
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Addres" />
          <input type="text" placeholder="Phone number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            placeholder="Message"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
