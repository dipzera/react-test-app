import { useEffect, useState } from "react";
import type { InventoryApp } from "../components/AppInventoryTable";

export const useApps = () => {
  const [apps, setApps] = useState<InventoryApp[]>([]);

  // TODO: Consider making this a custom hook as well
  useEffect(() => {
    (async function retrieveApps() {
      const response = await fetch("../../public/mock/apps.json");

      const data = await response.json();

      setApps(data.apps);
    })();
  }, []);

  return apps;
}
