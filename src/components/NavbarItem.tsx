import { NavLink } from "react-router-dom";

export type NavItem = {
  id: string;
  label: string;
  link: string;
};

type Props = {
  item: NavItem;
};

export default function NavbarItem({ item }: Props) {
  return (
    <NavLink
      to={item.link}
      className={({ isActive }) =>
        isActive
          ? "text-white underline underline-offset-[15px] decoration-4"
          : "text-white"
      }
    >
      {item.label}
    </NavLink>
  );
}
