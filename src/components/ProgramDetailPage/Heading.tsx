import { Divider, Typography } from "@mui/material";

type Props = { text: string };

const Heading = ({ text }: Props) => {
  return (
    <>
      <Typography variant="h5">{text}</Typography>
      <Divider />
    </>
  );
};

export default Heading;
