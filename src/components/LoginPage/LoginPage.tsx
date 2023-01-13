import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signIn } from "../../service/user.service";
import { userIdState } from "../../state/user.state";

type Props = {};

const LoginPage = (props: Props) => {
  const [userId, setUserId] = useRecoilState(userIdState);

  const handleLogIn = () => {
    signIn("scott.g.lebaron@gmail.com", "").then((id) => setUserId(id));
  };

  return userId ? (
    <Navigate to="/" />
  ) : (
    <Button onClick={() => handleLogIn()}>Login</Button>
  );
};

export default LoginPage;
