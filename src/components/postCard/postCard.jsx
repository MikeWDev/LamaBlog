import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/21031988/pexels-photo-21031988/free-photo-of-a-blurry-photograph-of-a-sunset-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1>Title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sit
          doloremque natus quae optio eum officiis quaerat velit temporibus
          numquam?
        </p>
        <Link href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
