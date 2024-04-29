import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPost, getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div key={post.id} className={styles.post}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
