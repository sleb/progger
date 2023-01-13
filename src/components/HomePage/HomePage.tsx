import { Link, Paper, Typography } from "@mui/material";
import { Link as RouterLink, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userIdState } from "../../state/user.state";
import Logo from "../Logo";

type Props = {};

const HomePage = (props: Props) => {
  const userId = useRecoilValue(userIdState);

  return userId ? (
    <Navigate to="/programs" />
  ) : (
    <Paper
      elevation={24}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        marginTop: 5,
      }}
    >
      <Logo fontSize={48} />
      <Typography variant="caption">
        <Link component={RouterLink} to="login">
          Log in
        </Link>
        {" to manage your Programs"}
      </Typography>
    </Paper>
  );
};

export default HomePage;
