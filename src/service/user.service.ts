import { User } from "../model/user.model";

export const getUser = async (id: string): Promise<User> => {
  return fakeUsers[id];
};

const fakeUsers: Record<string, User> = {
  "1": { id: "1", email: "scott.g.lebaron@gmail.com", name: "Scott LeBaron" },
};
