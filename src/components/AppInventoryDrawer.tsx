import Drawer from "./Drawer";
import type { InventoryApp } from "../types";
import { useAppMetadata } from "../hooks/use-app-metadata";
import { daysAgo } from "../utils/days-ago";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;

  app: InventoryApp;
};

export default function AppInventoryDrawer({ show, setShow, app }: Props) {
  const appMetadata = useAppMetadata(app.id);

  const metadataMap = {
    "App name": app.name,
    Category: app.category,
    Users: appMetadata?.users.length,
    Connector: <img src={app.connector} />,
    "Last classification": daysAgo(appMetadata?.lastClassification ?? ""),
  };

  return (
    <Drawer
      show={show}
      setShow={setShow}
      title={<h2 className="font-semibold">App overview</h2>}
    >
      <div className="flex flex-col gap-4">
        <div>{app.name}</div>
        <div className="border-[1px] border-blue-300 rounded bg-blue-100 p-4">
          <dl className="flex flex-col gap-2">
            {Object.entries(metadataMap).map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <dt>{key}:</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-xl border-[1px] border-gray-200">
          <table className="bg-white p-4 w-full">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <th className="text-left p-4 font-normal text-gray-600">Username</th>
              </tr>
              {appMetadata?.users.map((user) => (
                <tr key={user}>
                  <td className="p-4">{user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Drawer>
  );
}
