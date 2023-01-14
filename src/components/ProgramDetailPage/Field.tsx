import { Typography } from "@mui/material";

type Props = { text?: string };

const Field = ({ text }: Props) => {
  return <Typography>{text || "None"}</Typography>;
};

export default Field;
