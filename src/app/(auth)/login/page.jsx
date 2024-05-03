import { handleGithubLogin } from "@/lib/actions";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
