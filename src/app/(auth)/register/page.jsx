import { register } from "@/lib/actions";
import React from "react";
import styles from "./register.module.css";
const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wraper}>
        <form action={register} className={styles.form}>
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input
            type="password"
            placeholder="repeat password"
            name="passwordRepeat"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
