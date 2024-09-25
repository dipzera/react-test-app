import Drawer from "./Drawer";
import type { InventoryApp } from "./AppInventoryTable";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;

  app: InventoryApp;
};

export default function AppInventoryDrawer({ show, setShow, app }: Props) {
  return (
    <Drawer show={show} setShow={setShow} title={<h2>App overview</h2>}>
      {app.name}
    </Drawer>
  );
}
