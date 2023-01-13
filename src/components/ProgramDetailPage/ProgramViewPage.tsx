import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Program } from "../../model/program.model";
import { getProgram } from "../../service/program.service";

type Props = {};

const ProgramDetailPage = (props: Props) => {
  const { id } = useParams();
  const [program, setProgram] = useState<Program | null>(null);

  useEffect(() => {
    if (id) {
      getProgram(id).then(setProgram).catch(console.error);
    }
  }, [id]);

  return <div>{JSON.stringify(program)}</div>;
};

export default ProgramDetailPage;
