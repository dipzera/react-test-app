import AppInventoryTable from "./AppInventoryTable";
import MainLayout from "../layouts/MainLayout";

export default function AppInventory() {
  return (
    <div>
      <MainLayout
        title={<h1 className="text-[#4c4c4c] text-xl">App Inventory</h1>}
      >
        <AppInventoryTable />
      </MainLayout>
    </div>
  );
}
