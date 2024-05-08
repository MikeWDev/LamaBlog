"use client";

import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const formRef = useRef();
  useEffect(() => {
    if (state?.succes === true) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form action={formAction} ref={formRef} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="img" placeholder="Image url" />
      <textarea type="text" name="desc" placeholder="Description" rows={10} />
      <button>Add</button>

      {state?.error}
    </form>
  );
};

export default AdminPostForm;
