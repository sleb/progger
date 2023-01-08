import { Avatar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { gravatar } from "../../lib/gravatar";
import { User } from "../../model/user.model";
import { getUser } from "../../service/user.service";
import { userIdState } from "../../state/user.state";

type Props = {};

const ProfileMenu = (props: Props) => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const [user, setUser] = useState<User | null>(null);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const closeMenu = () => {
    setMenuAnchor(null);
  };

  useEffect(() => {
    if (userId) {
      getUser(userId).then(setUser).catch(console.error);
    }
  }, [userId]);

  return (
    <>
      <Button onClick={openMenu}>
        <Avatar alt={user?.name} src={gravatar(user?.email)} />
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
            setUserId(null);
            closeMenu();
          }}
        >
          <Typography textAlign="center">Log Out</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
