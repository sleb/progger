import md5 from "md5";

export const gravatar = (email: string = "", size: number = 50): string =>
  `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}/${size}`;
