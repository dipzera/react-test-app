import { useUser } from "../hooks/use-user";
import ChevronDown from "./svgs/ChevronDown";

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export default function UserProfile() {
  const user = useUser();

  // TODO: Wrap user name in a dropdown component ?
  //
  return (
    <div className="flex gap-3 items-center min-w-24">
      <div className="rounded-full overflow-hidden">
        <img src={user?.avatar} alt={user?.name} />
      </div>
      <div className="text-white w-24">{user?.name}</div>
      <div>
        <ChevronDown />
      </div>
    </div>
  );
}
