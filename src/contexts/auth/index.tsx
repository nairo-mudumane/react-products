import React from "react";
import { IAuthContext, IUserLoginOptions } from "./@types";
import { IUser } from "../../@types";
import helpers from "../../helpers";

export const AuthContext = React.createContext<IAuthContext>({
  user: null,
} as IAuthContext);

export function AuthContextProvider(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const strLocalUser = helpers.storage.get("_u");
  const localUser = strLocalUser ? (JSON.parse(strLocalUser) as IUser) : null;

  const [user, setUser] = React.useState<IUser | null>(localUser);

  function login(name: string, email: string, options?: IUserLoginOptions) {
    setUser({ name, email });
    helpers.storage.set("_u", JSON.stringify({ name, email }));

    if (options && Object.keys(options).length > 0) {
      if (options.onLogin) options.onLogin();
    }
  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      {props.children}
    </AuthContext.Provider>
  );
}
