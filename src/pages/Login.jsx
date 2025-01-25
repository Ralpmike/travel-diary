import { useNavigate } from "react-router";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
// import { useState } from "react";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("raphmike@gmail.com");
  const [password, setPassword] = useState("raphmike");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const loginDetails = {
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    // };
    // if (!loginDetails.email || !loginDetails.password) return;
    // console.log(loginDetails);
    // console.log("isAuthenticated", isAuthenticated);
    const loginDetails = {
      email,
      password,
    };
    login(loginDetails);
    e.target.reset();
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("isAuthenticated", isAuthenticated);
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
