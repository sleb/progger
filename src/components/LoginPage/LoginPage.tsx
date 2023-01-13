import { Lock } from "@mui/icons-material";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signIn } from "../../service/user.service";
import { userIdState } from "../../state/user.state";

type Props = {};
type FormData = {
  email: string;
  password: string;
};

const LoginPage = (props: Props) => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: "onSubmit" });

  const onSubmit = ({ email, password }: FormData) => {
    signIn(email, password)
      .then((id) => setUserId(id))
      .catch(console.error);
  };

  return userId ? (
    <Navigate to="/" />
  ) : (
    <Container maxWidth="sm">
      <Stack
        gap={2}
        alignItems="center"
        marginTop={5}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Lock color="secondary" />
        <Typography variant="h5">Log In</Typography>
        <TextField
          label="Email"
          autoCapitalize="never"
          error={!!errors.email}
          fullWidth
          {...register("email", { required: true })}
        />
        <TextField
          type="password"
          label="Password"
          autoCapitalize="never"
          error={!!errors.password}
          fullWidth
          {...register("password", { required: true })}
        />
        <Button type="submit" variant="contained" fullWidth>
          Log In
        </Button>
      </Stack>
    </Container>
  );
};

export default LoginPage;
