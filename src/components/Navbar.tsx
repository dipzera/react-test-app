import { Link } from "react-router-dom";
import NavbarItems from "./NavbarItems";
import NavbarLogo from "../assets/svg-components/NavbarLogo";
import UserProfile from "./UserProfile";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center w-full h-[56px] bg-[#1f5ced] px-5 gap-6">
      <div className="w-[50px]">
        <Link to="/">
          <NavbarLogo />
        </Link>
      </div>
      <NavbarItems />
      <UserProfile />
    </div>
  );
}
