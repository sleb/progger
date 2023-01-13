import "@fontsource/barlow/600.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = { fontSize: number };

const Logo = (props: Props) => {
  return (
    <Typography
      {...props}
      fontFamily="barlow"
      fontWeight={600}
      letterSpacing=".2rem"
      color="inherit"
      component={Link}
      to="/"
      sx={{ textDecoration: "none" }}
    >
      [Progger]
    </Typography>
  );
};

export default Logo;
