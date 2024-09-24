import { useApps } from "../hooks/use-apps";

const TABLE_HEADER_COLS = [
  {
    name: "Name",
    key: "name",
  },
  {
    name: "Category",
    key: "category",
  },
  {
    name: "Connector",
    key: "connector",
  },
];

// TODO: Move to separate type-related directory
export type InventoryApp = {
  id: string;
  name: string;
  category: string;
  connector: string;
};

export default function AppInventoryTable() {
  const inventoryApps = useApps();

  return (
    <table className="w-full text-sm text-left text-black bg-white rounded-md divide-y divide-gray-200">
      <thead className="text-xs">
        <tr>
          {TABLE_HEADER_COLS.map((col) => (
            <th key={col.key} className="px-6 py-3">
              {col.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {inventoryApps.map((app) => (
          <tr key={app.id} className="cursor-pointer">
            <td className="px-6 py-4 whitespace-nowrap">{app.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{app.category}</td>
            {/* TODO: Render connector icon here */}
            <td className="px-6 py-4 whitespace-nowrap">{app.connector}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
