import { sql } from "@vercel/postgres";
import { db, dbConnect } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
export const getPosts = async () => {
  try {
    dbConnect();
    const res = await sql`SELECT * FROM posts`;
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

    const result = await sql`SELECT * FROM posts WHERE slug = ${slug};`;
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
    const posts = await sql`SELECT * FROM users WHERE id = ${id};`;

    return posts.rows[0];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch single user");
  }
};
export const getUsers = async () => {
  noStore();
  try {
    dbConnect();
    const users = await sql`SELECT * FROM users`;

    return users.rows;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
