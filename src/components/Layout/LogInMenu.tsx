import { PersonOutline } from "@mui/icons-material";
import { Avatar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const LogInMenu = (props: Props) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const closeMenu = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <Button onClick={openMenu}>
        <Avatar alt="Log In">
          <PersonOutline />
        </Avatar>
      </Button>
      <Menu
        anchorEl={menuAnchor}
        open={!!menuAnchor}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={closeMenu}
        keepMounted
      >
        <MenuItem
          onClick={() => {
            closeMenu();
            navigate("/login");
          }}
        >
          <Typography textAlign="center">Log In</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            closeMenu();
          }}
        >
          <Typography textAlign="center">Register</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default LogInMenu;
