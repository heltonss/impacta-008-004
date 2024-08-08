import styles from "./styles.module.css";

interface IOwnProps {
  text: string;
  colorBox: "#000000" | "#DEBB10";
}

function TextBlock({ text, colorBox }: IOwnProps) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: colorBox, color: "#fff", textAlign: "center" }}
    >
      {text}
    </div>
  );
}

export default TextBlock;
