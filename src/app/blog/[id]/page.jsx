import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { getPost } from "@/lib/data";
import PostUser from "@/components/postUser/postUser";

export const generateMetadata = async ({ params }) => {
  const slug = params.id;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.body,
  };
};

const SinglePostPage = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image alt="" fill src={`${post.img}`} />
      </div>
      <div className={styles.textContainer}>
        <h1>{post.title}</h1>
        <div className={styles.detail}>
          <PostUser userid={post.userid} />
          <div className={styles.detailText}>
            <span className={styles.detailsTitle}>Published</span>
            <span className={styles.detailValue}>27.04.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
