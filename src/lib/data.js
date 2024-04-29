import { db, dbConnect } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
export const getPosts = async () => {
  try {
    dbConnect();
    const res = await db.query("SELECT * FROM posts");
    const posts = res.rows;
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
export const getPost = async (slug) => {
  try {
    dbConnect();
    const result = await db.query("SELECT * FROM posts WHERE slug = $1; ", [
      slug,
    ]);
    const post = result.rows[0];

    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch single post");
  }
};
export const getUser = async (id) => {
  noStore();
  try {
    dbConnect();
    const posts = await db.query("SELECT * FROM users WHERE id = $1;", [id]);

    return posts.rows[0];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
