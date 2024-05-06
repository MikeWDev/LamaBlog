import LoginForm from "@/components/LoginForm/LoginForm";
import { handleGithubLogin, login } from "@/lib/actions";
import styles from "./login.module.css";
const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wraper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
