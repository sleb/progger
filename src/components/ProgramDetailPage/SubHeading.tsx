import { Typography } from "@mui/material";

type Props = { text: string };

const SubHeading = ({ text }: Props) => {
  return <Typography variant="h6">{text}</Typography>;
};

export default SubHeading;
