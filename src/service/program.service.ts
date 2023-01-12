import { Program } from "../model/program.model";

const programs: Program[] = [
  {
    id: "1234",
    date: new Date(2023, 0, 8),
    title: "Sacrament 1/8/2023",
    announcements: ["building cleaning at 8am on Saturday"],
    openingPrayer: "Henry LeBaron",
    openingHymn: { page: 23, title: "Oh Come Thou Font" },
    closingHymn: { page: 200, title: "God Be With Us Til We Meet Again" },
    business: ["release Allison LeBaron", "call Freddy LeBaron"],
    speakers: ["Abe LeBaron", "Scott LeBaron"],
    closingPrayer: "Mona Bailey",
  },
  {
    id: "3495",
    date: new Date(2023, 0, 15),
    title: "Sacrament 1/15/2023",
    announcements: ["building cleaning at 8am on Saturday"],
    openingPrayer: "Henry LeBaron",
    openingHymn: { page: 23, title: "Oh Come Thou Font" },
    closingHymn: { page: 200, title: "God Be With Us Til We Meet Again" },
    business: ["release Allison LeBaron", "call Freddy LeBaron"],
    speakers: ["Abe LeBaron", "Scott LeBaron"],
    closingPrayer: "Mona Bailey",
  },
  {
    id: "9384",
    date: new Date(2023, 0, 22),
    title: "Sacrament 1/22/2023",
    announcements: ["building cleaning at 8am on Saturday"],
    openingPrayer: "Henry LeBaron",
    openingHymn: { page: 23, title: "Oh Come Thou Font" },
    closingHymn: { page: 200, title: "God Be With Us Til We Meet Again" },
    business: ["release Allison LeBaron", "call Freddy LeBaron"],
    speakers: ["Abe LeBaron", "Scott LeBaron"],
    closingPrayer: "Mona Bailey",
  },
];

const userIdToPrograms: Record<string, Program[]> = {
  "1": programs,
};

export const getPrograms = async (): Promise<Program[]> => {
  return programs;
};

export const getProgramsForUser = async (id: string): Promise<Program[]> =>
  userIdToPrograms[id];

export const deletePrograms = async (ids: string[]): Promise<void> => {
  for (const userPrograms of Object.values(userIdToPrograms)) {
    for (const id of ids) {
      const index = userPrograms.findIndex((p) => id === p.id);
      if (index >= 0) {
        userPrograms.splice(index, 1);
        fireCallbacks();
      }
    }
  }
};

export const deleteProgram = async (id: string): Promise<void> => {
  for (const userPrograms of Object.values(userIdToPrograms)) {
    const index = userPrograms.findIndex((p) => p.id === id);
    if (index >= 0) {
      userPrograms.splice(index, 1);
      fireCallbacks();
    }
  }
};

export const onProgramsSnapshot = (
  id: string,
  cb: (programs: Program[]) => void,
  error: (error: Error) => void
): (() => void) => {
  callbacks.push(cb);
  fireCallbacks();
  return () => {
    console.log("unsubscribed from `onProgramsSnapshot`");
  };
};

const callbacks: ((programs: Program[]) => void)[] = [];

const fireCallbacks = () => {
  for (const userPrograms of Object.values(userIdToPrograms)) {
    for (const cb of callbacks) {
      cb([...userPrograms]);
    }
  }
};
