import { ArticleOutlined } from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Program } from "../../model/program.model";
import { onProgramsSnapshot } from "../../service/program.service";
import { userIdState } from "../../state/user.state";

type Props = {};

const ProgramsPage = (props: Props) => {
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
    <List>
      {programs.map((p, i) => (
        <ListItem key={i}>
          <ListItemButton>
            <ListItemIcon>
              <IconButton
                onClick={() => toggleSelected(p.id)}
                sx={{
                  backgroundColor: selected.has(p.id)
                    ? "primary.main"
                    : "inherit",
                }}
              >
                <ArticleOutlined />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={p.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ProgramsPage;
