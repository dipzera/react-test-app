import Drawer from "./Drawer";
import type { InventoryApp } from "../types";
import { useAppMetadata } from "../hooks/use-app-metadata";
import AppUsersList from "./AppUsersList";
import AppMetadata from "./AppMetadata";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;

  app: InventoryApp;
};

export default function AppInventoryDrawer({ show, setShow, app }: Props) {
  const appMetadata = useAppMetadata(app.id);

  return (
    <Drawer
      show={show}
      setShow={setShow}
      title={<h2 className="font-semibold">App overview</h2>}
    >
      <div className="flex flex-col gap-4">
        <div>{app.name}</div>
        <AppMetadata app={app} appMetadata={appMetadata} />
        <AppUsersList appMetadata={appMetadata} />
      </div>
    </Drawer>
  );
}
