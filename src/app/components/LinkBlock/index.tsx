import Link from "next/link";
import styles from "./styles.module.css";

interface IOwnProps {
  text: string;
  colorBox: "#000000" | "#DEBB10";
  linkPath: string;
}

function LinkBlock({ text, colorBox, linkPath }: IOwnProps) {
  return (
    <Link
      href={linkPath}
      className={styles.container}
      style={{ backgroundColor: colorBox, color: "#fff", textAlign: "center" }}
    >
      {text}
    </Link>
  );
}

export default LinkBlock;
