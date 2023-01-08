import "@fontsource/barlow/600.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Typography
      fontFamily="barlow"
      fontWeight={600}
      fontSize={18}
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
