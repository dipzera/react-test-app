import { InventoryAppMetadata } from "../types";

type Props = {
  appMetadata?: InventoryAppMetadata;
}

export default function AppUsersList({ appMetadata }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border-[1px] border-gray-200">
      <table className="bg-white p-4 w-full">
        <tbody className="divide-y divide-gray-200">
          <tr>
            <th className="text-left p-4 font-normal text-gray-600">
              Username
            </th>
          </tr>
          {appMetadata?.users.map((user, index) => (
            <tr key={index}>
              <td className="p-4">{user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
