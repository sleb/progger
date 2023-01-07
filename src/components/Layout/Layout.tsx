import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Outlet />
    </Container>
  );
};

export default Layout;
