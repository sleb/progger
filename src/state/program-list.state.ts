import { atom } from "recoil";

export const selectedProgramsState = atom<Set<string>>({
  key: "selectedProgramsState",
  default: new Set(),
});
