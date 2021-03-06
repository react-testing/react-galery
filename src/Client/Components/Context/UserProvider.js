import { createContext, useState, useMemo } from "react";

export const UserContext = createContext();

export default function UserProvider(props) {
  const [user, setUser] = useState({});
  const value = useMemo(() => ({ user, setUser }));

  return <UserContext.Provider value={value} {...props} />;
}
