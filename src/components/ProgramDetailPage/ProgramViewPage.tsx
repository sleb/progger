import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Program } from "../../model/program.model";
import { getProgram, onProgramSnapshot } from "../../service/program.service";
import Field from "./Field";
import FieldList from "./FieldList";
import Heading from "./Heading";
import HymnField from "./HymnField";
import SubHeading from "./SubHeading";
import Title from "./Title";

type Props = {};

const ProgramViewPage = (props: Props) => {
  const { id } = useParams();
  const [program, setProgram] = useState<Program | undefined>(undefined);

  useEffect(() => {
    if (id) {
      onProgramSnapshot(id, setProgram, console.error);
      getProgram(id).then(setProgram).catch(console.error);
    }
  }, [id]);

  return (
    <Stack gap={2}>
      <Title text={program?.title} date={program?.date} />
      <Heading text="Welcome" />
      <Field text="Welcome brothers and sisters." />
      <SubHeading text="Announcements" />
      <FieldList fields={program?.announcements || []} />
      <SubHeading text="Opening Hymn" />
      <HymnField song={program?.openingHymn} />
      <SubHeading text="Opening Prayer" />
      <Field text={program?.openingPrayer} />
      <Heading text="Sacrament" />
      <SubHeading text="Ward Business" />
      <FieldList fields={program?.business || []} />
      <SubHeading text="Sacrament Hymn" />
      <HymnField song={program?.sacramentHymn} />
      <Heading text="Program" />
      <SubHeading text="Youth Speakers" />
      <FieldList fields={program?.youthSpeakers || []} />
      <SubHeading text="Rest Hymn" />
      <HymnField song={program?.restHymn} />
      <SubHeading text="Adult Speakers" />
      <FieldList fields={program?.adultSpeakers || []} />
      <Heading text="Closing" />
      <SubHeading text="Closing Hymn" />
      <HymnField song={program?.closingHymn} />
      <SubHeading text="Closing Prayer" />
      <Field text={program?.closingPrayer} />
    </Stack>
  );
};

export default ProgramViewPage;
