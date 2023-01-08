import { PersonOutline } from "@mui/icons-material";
import { Avatar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { userIdState } from "../../state/user.state";

type Props = {};

const LogInMenu = (props: Props) => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
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
            setUserId("1");
            closeMenu();
          }}
        >
          <Typography textAlign="center">Log In</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setUserId("1");
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
