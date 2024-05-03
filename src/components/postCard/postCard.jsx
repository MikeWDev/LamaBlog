import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          {post.image && (
            <Image src={post.image} alt="" fill className={styles.img} />
          )}
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1>{post.title}</h1>
        <p>{post.body.slice(0, 200)}...</p>
        <Link href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
