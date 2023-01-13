import { List } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Program } from "../../model/program.model";
import { onProgramsSnapshot } from "../../service/program.service";
import { userIdState } from "../../state/user.state";
import ProgramFab from "./ProgramFab";
import ProgramListItem from "./ProgramListItem";

type Props = {};

const ProgramListPage = (props: Props) => {
  const userId = useRecoilValue(userIdState)!!;
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    return onProgramsSnapshot(userId, setPrograms, console.error);
  }, [userId]);

  return (
    <>
      <List>
        {programs.map((p, i) => (
          <ProgramListItem program={p} key={i} />
        ))}
      </List>
      {userId && <ProgramFab />}
    </>
  );
};

export default ProgramListPage;
