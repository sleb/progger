import { AppBar, Toolbar } from "@mui/material";
import { useRecoilValue } from "recoil";
import { userIdState } from "../../state/user.state";
import LogInMenu from "./LogInMenu";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";

type Props = {};

const Header = (props: Props) => {
  const userId = useRecoilValue(userIdState);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo />
        {userId ? <ProfileMenu /> : <LogInMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
