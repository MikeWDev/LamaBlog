"use server";
import { revalidatePath } from "next/cache";
import { db, dbConnect } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

//#####POST ACCTIONS#####
export const addPost = async (formData) => {
  const { title, desc, userid } = Object.fromEntries(formData);
  const date = new Date().toLocaleDateString();
  const slug = (title.slice(0, 5) + date.slice(0, 3) + "_" + userid).replace(
    " ",
    ""
  );

  try {
    dbConnect();
    await db.query(
      "INSERT INTO posts (title, body, slug, created_by, created_at) VALUES ($1,$2,$3,$4,$5)",
      [title, desc, slug, userid, date]
    );
    console.log("Post saved to database");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const deletePost = async (formData) => {
  const { slug } = Object.fromEntries(formData);

  try {
    dbConnect();
    await db.query("DELETE  FROM posts WHERE slug = $1", [slug]);
    console.log("delete from db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

//#####USER ACTIONS#####
export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);
  const date = new Date().toLocaleDateString();

  try {
    dbConnect();
    await db.query(
      "INSERT INTO users (username, email,password,createdat,img) VALUES ($1,$2,$3,$4,$5)",
      [username, email, password, date, img]
    );
    revalidatePath("/admin");
    console.log("saved to db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const deleteUser = async (prevState, formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnect();
    await db.query("DELETE * FROM users WHERE id = $1", [id]);
    await db.query("DELETE * FROM posts WHERE created_by = $1", [id]);
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("Deleted user and all posts  from db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

//#####ACCOUNT ACTIONS ######
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};
export const handleGithubLogout = async () => {
  "use server";
  await signOut("github");
};
export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Password doesn't match" };
  }
  try {
    dbConnect();
    const userCheck = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (userCheck.rowCount > 0) {
      return { error: "User already exists, please log in" };
    } else {
      const date = new Date().toLocaleDateString();
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);
      await db.query(
        "INSERT INTO users (username, email,password,createdat) VALUES ($1,$2,$3,$4)",
        [username, email, hashedPassword, date]
      );
      return { succes: true };
    }
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username and password" };
    }
    throw error;
  }
};
