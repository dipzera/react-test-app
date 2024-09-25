import type { InventoryApp, InventoryAppMetadata } from "../types";
import { daysAgo } from "../utils/days-ago";

type Props = {
  app: InventoryApp;
  appMetadata?: InventoryAppMetadata;
};

export default function AppMetadata({ app, appMetadata }: Props) {
  const metadataMap = {
    "App name": app.name,
    Category: app.category,
    Users: appMetadata?.users.length,
    Connector: <img src={app.connector} />,
    "Last classification": daysAgo(appMetadata?.lastClassification ?? ""),
  };

  return (
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
  );
}
