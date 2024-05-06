import React, { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/AdminPosts/adminPosts";
import AdminPostForm from "@/components/AdminPostForm/adminPostForm";
const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPostForm />
          </Suspense>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUserForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
