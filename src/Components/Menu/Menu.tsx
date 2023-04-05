import React, { useState } from "react";
import "./Menu.scss";

interface MenuItem {
  title: string;
  subMenu?: MenuItem[];
}

interface Props {
  menuItems: MenuItem[];
}

const Menu: React.FC<Props> = ({ menuItems }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const renderSubMenu = (subMenuItems: MenuItem[]) => {
    return subMenuItems.map(({ title, subMenu }, index) => {
      if (subMenu) {
        return (
          <li key={index} className="menu-subitem">
            <button className="menu-title" onClick={toggleOpenMenu}>
              {title}
            </button>
            {openMenu && renderSubMenu(subMenu)}
          </li>
        );
      } else {
        return (
          <li key={index} className="menu-subitem">
            <button className="menu-title">{title}</button>
          </li>
        );
      }
    });
  };

  const renderMenuItems = (menuItems: MenuItem[]) => {
    return menuItems.map(({ title, subMenu }, index) => {
      if (subMenu) {
        return (
          <li key={index} className="menu-item">
            <button className="menu-title" onClick={toggleOpenMenu}>
              {title}
            </button>
            {openMenu && (
              <ul className="menu-submenu">{renderSubMenu(subMenu)}</ul>
            )}
          </li>
        );
      } else {
        return (
          <li key={index} className="menu-item">
            <button className="menu-title">{title}</button>
          </li>
        );
      }
    });
  };

  return <ul className="menu">{renderMenuItems(menuItems)}</ul>;
};

export { Menu };
