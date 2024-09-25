import { useEffect, useState } from "react";
import type { User } from "../components/UserProfile";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async function getUser() {
      const response = await fetch("./mock/user-profile.json");

      const user = await response.json();

      setUser(user);
    })();
  }, []);

  return user;
};
