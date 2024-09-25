import AppInventoryTable from "./AppInventoryTable";
import MainLayout from "../layouts/MainLayout";

export default function AppInventory() {
  return (
    <div>
      <MainLayout
        title={<h1 className="text-primary text-xl">App Inventory</h1>}
      >
        <AppInventoryTable />
      </MainLayout>
    </div>
  );
}
