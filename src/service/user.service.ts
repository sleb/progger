import { User, UserData } from "../model/user.model";

export const getUser = async (id: string): Promise<User> => {
  return { id, ...fakeUsers[id] };
};

export const signIn = async (
  email: string,
  password: string
): Promise<string> => {
  const entry = Object.entries(fakeUsers).find(
    ([id, user]) => user.email === email
  );

  if (!entry) {
    throw Error("bad user");
  }

  return entry[0];
};

const fakeUsers: Record<string, UserData> = {
  "1": { email: "scott.g.lebaron@gmail.com", name: "Scott LeBaron" },
};
