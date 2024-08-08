import { Typography } from "@mui/material";
import style from "./styles.module.css";

interface IOwnProps {
  text: string;
  bold?: string;
}

function Title({ text, bold }: IOwnProps) {
  return (
    <Typography
      className={style["title"]}
      style={{ fontWeight: bold }}
      color="#000"
      variant="h1"
    >
      {text}
    </Typography>
  );
}

export default Title;
