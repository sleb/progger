export interface UserData {
  name: string;
  email: string;
}

export interface User extends UserData {
  id: string;
}
