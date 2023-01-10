import { Add, ArticleOutlined, Delete } from "@mui/icons-material";
import {
  Checkbox,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Program } from "../../model/program.model";
import { onProgramsSnapshot } from "../../service/program.service";
import { userIdState } from "../../state/user.state";

type Props = {};

const ProgramListPage = (props: Props) => {
  const navigate = useNavigate();
  const userId = useRecoilValue(userIdState);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleSelected = (programId: string) => {
    if (selected.has(programId)) {
      setSelected(new Set([...selected].filter((id) => id !== programId)));
    } else {
      setSelected(new Set([programId, ...selected]));
    }
  };

  useEffect(() => {
    if (userId) {
      return onProgramsSnapshot(userId, setPrograms, console.error);
    } else {
      setPrograms([]);
    }
  }, [userId]);

  return (
    <>
      <List>
        {programs.map((p, i) => (
          <ListItem
            key={i}
            secondaryAction={
              <Checkbox
                onChange={() => toggleSelected(p.id)}
                checked={selected.has(p.id)}
              />
            }
            disablePadding
          >
            <ListItemButton onClick={() => navigate(`programs/${p.id}`)}>
              <ListItemIcon>
                <ArticleOutlined />
              </ListItemIcon>
              <ListItemText primary={p.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack
        direction="column"
        style={{ position: "absolute", right: 55, bottom: 55 }}
        gap={2}
      >
        {selected.size > 0 && (
          <Fab>
            <Delete />
          </Fab>
        )}
        <Fab>
          <Add />
        </Fab>
      </Stack>
    </>
  );
};

export default ProgramListPage;
