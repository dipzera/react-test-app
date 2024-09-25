import { useEffect, useState } from "react";
import type { InventoryAppMetadata } from "../types";

export const useAppMetadata = (appID: string) => {
  const [appMetadata, setAppMetadata] = useState<
    InventoryAppMetadata | undefined
  >(undefined);

  useEffect(() => {
    (async function retrieveApps() {
      const response = await fetch("./mock/apps-metadata.json");

      const data = await response.json();
      const metadata: InventoryAppMetadata[] = data.metadata;

      const appMetadata = metadata.find((m) => m.id === appID);

      setAppMetadata(appMetadata);
    })();
  }, []);

  return appMetadata;
};
