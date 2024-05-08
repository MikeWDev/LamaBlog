"use client";

import { addUser } from "@/lib/actions";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const formRef = useRef();
  useEffect(() => {
    if (state?.succes === true) {
      formRef.current?.reset();
    }
  }, [state]);
  return (
    <form ref={formRef} action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
