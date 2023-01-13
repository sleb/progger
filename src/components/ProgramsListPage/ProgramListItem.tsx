import { ArticleOutlined } from "@mui/icons-material";
import {
  Checkbox,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Program } from "../../model/program.model";
import { selectedProgramsState } from "../../state/program-list.state";

type Props = {
  program: Program;
};

const ProgramListItem = ({ program }: Props) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useRecoilState(selectedProgramsState);

  const toggleSelected = (programId: string) => {
    if (selected.has(programId)) {
      setSelected(new Set([...selected].filter((id) => id !== programId)));
    } else {
      setSelected(new Set([programId, ...selected]));
    }
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <Checkbox
            onChange={() => toggleSelected(program.id)}
            checked={selected.has(program.id)}
          />
        }
        disablePadding
      >
        <ListItemButton onClick={() => navigate(program.id)}>
          <ListItemIcon>
            <ArticleOutlined />
          </ListItemIcon>
          <ListItemText primary={program.title} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default ProgramListItem;
