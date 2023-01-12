import { Add, Delete } from "@mui/icons-material";
import { Fab, Stack } from "@mui/material";
import { useRecoilState } from "recoil";
import { deletePrograms } from "../../service/program.service";
import { selectedProgramsState } from "../../state/program-list.state";

type Props = {};

const ProgramFab = (props: Props) => {
  const [selected, setSelected] = useRecoilState(selectedProgramsState);

  return (
    <Stack
      direction="column"
      style={{ position: "absolute", right: 55, bottom: 55 }}
      gap={2}
    >
      {selected.size > 0 && (
        <Fab
          onClick={() =>
            deletePrograms([...selected]).then(() => setSelected(new Set()))
          }
        >
          <Delete />
        </Fab>
      )}
      <Fab>
        <Add />
      </Fab>
    </Stack>
  );
};

export default ProgramFab;
