import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

function SiteNav() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "State", url: "/state" },
    { label: "Forms", url: "/forms" },
    { label: "Props", url: "/props" },
    { label: "Effect", url: "/effect" },
    { label: "Filtering Props", url: "/filterprops" },
    { label: "Redux", url: "/reduxtest" },
  ];
  return (
    <div className={styles.wrapper}>
      <nav className={styles.links}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.url}
            to={navLink.url}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            {navLink.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default SiteNav;
