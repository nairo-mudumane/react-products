import { IUser } from "../../@types";

export type IUserLoginOptions = { onLogin?: () => void };

export type IAuthContext = {
  user: IUser | null;
  login: (name: string, email: string, options?: IUserLoginOptions) => void;
};
