import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userIdState } from "../state/user.state";

type Props = {};

const AuthRequired = (props: Props) => {
  const userId = useRecoilValue(userIdState);
  return userId ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRequired;
