import { ICard } from "@/app/interfaces/card";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function CardChild({
  name,
  donation_name,
  pet_type,
  address,
  age,
  image,
}: ICard) {
  return (
    <Card sx={{ maxWidth: 275, marginTop: "10px" }}>
      <CardContent>
        <Image src={image} width="243" height="147" alt="placeholder" />
        <Typography
          gutterBottom
          sx={{
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "text.secondary",
            fontSize: "20px",
          }}
        >
          {donation_name}
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 1.5, fontSize: "20px" }}>
          {`${age} anos`}
        </Typography>
        {/* <Typography
          sx={{
            fontSize: "20px",
          }}
          variant="body2"
        >
          {pet_type}
        </Typography> */}
        <Typography
          sx={{
            color: "text.secondary",
            mb: 1.5,
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          {address}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardChild;
