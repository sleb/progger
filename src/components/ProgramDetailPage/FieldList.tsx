import { Stack } from "@mui/material";
import Field from "./Field";

type Props = { fields: string[] };

const FieldList = ({ fields }: Props) => {
  return fields.length === 0 ? (
    <Field text="No announcements" />
  ) : (
    <Stack direction="column">
      {fields.map((a, i) => (
        <Field key={i} text={a} />
      ))}
    </Stack>
  );
};

export default FieldList;
