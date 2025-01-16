import { NavLink } from "react-router";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
