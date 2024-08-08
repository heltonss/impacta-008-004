import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function CardChild() {
  return (
    <Card sx={{ maxWidth: 275, marginTop: "10px" }}>
      <CardContent>
        <Image
          src="https://placehold.co/150x150/png"
          width="243"
          height="147"
          alt="placeholder"
        />
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Nome do Pet
        </Typography>
        <Typography variant="h5" component="div">
          Nome da ong ou do Doador
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          sexo ou idade
        </Typography>
        <Typography variant="body2">tipo do pet</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          cidade ou estado
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardChild;
