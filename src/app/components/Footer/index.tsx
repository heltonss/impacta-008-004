import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <Image
        src="/logo.png"
        alt="logotipo do pet conecta"
        width="260"
        height="124"
      />
      <nav className={styles.block}>
        <Link href="#">Topic</Link>
        <Link href="#">Topic</Link>
        <Link href="#">Topic</Link>
        <Link href="#">Topic</Link>
      </nav>
    </footer>
  );
}

export default Footer;
