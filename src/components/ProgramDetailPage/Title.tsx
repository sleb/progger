import { Typography } from "@mui/material";

type Props = { text: string | undefined };

const Title = ({ text }: Props) => {
  return (
    <Typography variant="h4" textAlign="center">
      {text || "Not set"}
    </Typography>
  );
};

export default Title;
