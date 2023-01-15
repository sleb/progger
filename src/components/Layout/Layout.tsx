import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ marginY: 5 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
