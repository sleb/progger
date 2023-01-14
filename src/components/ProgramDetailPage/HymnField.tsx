import { Song } from "../../model/song.model";
import Field from "./Field";

type Props = { song?: Song };

const HymnField = ({song}: Props) => {
  return (
    <Field
      text={song ? `${song.title} - pg. ${song.page}` : "None"}
    />
  );
};

export default HymnField;
