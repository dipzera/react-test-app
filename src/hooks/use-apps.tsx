import { useEffect, useState } from "react";
import type { InventoryApp } from "../components/AppInventoryTable";

export const useApps = () => {
  const [apps, setApps] = useState<InventoryApp[]>([]);

  useEffect(() => {
    (async function retrieveApps() {
      const response = await fetch("./mock/apps.json");

      const data = await response.json();

      setApps(data.apps);
    })();
  }, []);

  return apps;
}
