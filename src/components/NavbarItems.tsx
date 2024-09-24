import { useState } from 'react';
import NavbarItem, { NavItem } from './NavbarItem';

const DEFAULT_NAVBAR_ITEMS = [
  {
    id: "apps",
    label: "Apps",
    link: "/apps",
  },
]

export default function NavbarItems() {
  const [items, _] = useState<NavItem[]>(DEFAULT_NAVBAR_ITEMS)

  return (
    <div className="d-flex flex-row justify-between w-full">
      <ul className="nav">
        {items.map(item => (
          <li key={item.id}>
            <NavbarItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
