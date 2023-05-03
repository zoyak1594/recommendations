import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={"/images/assets/afterwork_logo.png"}
            alt="Afterwork logo"
            width={"150"}
            height={"80"}
          />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/Recommendations">Recommendations</Link>
        <Link href="/Confirmations">Pricing</Link>
        <Link href="/vendors">Browse Vendors</Link>
        <Link href="/login">Log in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
