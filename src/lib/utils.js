import pg from "pg";
import "dotenv/config";

export const db = new pg.Client({
  user: `${process.env.DB_USER}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_DATABASE}`,
  password: `${process.env.DB_PASSWORD}`,
  port: `${process.env.DB_PORT}`,
});

export const dbConnect = async () => {
  if (db._connected === true) {
    console.log("Using existing connection");
  } else {
    await db.connect();
    console.log("Connected to the database");
  }
};
