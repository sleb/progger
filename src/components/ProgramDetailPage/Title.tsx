import { Stack, Typography } from "@mui/material";

type Props = { text?: string; date?: Date };

const Title = ({ text, date }: Props) => {
  const dateStr = date
    ? date.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Not set";

  return (
    <Stack>
      <Typography
        variant="h4"
        textAlign={{
          md: "center",
        }}
      >
        {text || "Not set"}
      </Typography>
      <Typography variant="subtitle1" textAlign={{ md: "center" }}>
        {dateStr}
      </Typography>
    </Stack>
  );
};

export default Title;
