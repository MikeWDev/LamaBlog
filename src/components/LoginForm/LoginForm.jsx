"use client";
import React, { useEffect } from "react";
import styles from "./LoginForm.module.css";
import { useFormState } from "react-dom";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.succes && router.push("/login");
  }, [state?.succes, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have and account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
