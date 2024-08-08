import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/logo.png"
        alt="logotipo do pet conecta"
        width="260"
        height="124"
      />
      <nav className={styles.nav}>
        <Link
          className={`${styles.link} ${styles.marginRight}`}
          href="/dashboard"
        >
          Faça uma adoção
        </Link>
        <Link className={styles.link} href="/dashboard">
          Adoção
        </Link>
      </nav>
      <Link className={styles.link} href="/dashboard">
        Entrar
      </Link>
      <Link className={styles.button} href="/">
        Cadastre-se
      </Link>
    </header>
  );
}

export default Header;
