import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const result = await sql`CREATE TABLE users (
        id SERIAL PRIMARY KEY, 
          username VARCHAR(50) not null,
            email VARCHAR(150) not null,
            password VARCHAR(50),
          created_at date not null,
          is_admin boolean,
          img text);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
