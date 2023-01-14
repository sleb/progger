import { Divider, Typography } from "@mui/material";

type Props = { text: string };

const Heading = ({ text }: Props) => {
  return (
    <>
      <Typography variant="h4">{text}</Typography>
      <Divider />
    </>
  );
};

export default Heading;
