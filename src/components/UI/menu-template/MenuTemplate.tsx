import React from 'react';
import './MenuTemplate.css';
import { MenuItemTemplate as Item } from '../menu-item-template/MenuItemTemplate';
import type { ItemMenu } from '../../../utils/constants';

type MenuPropsType = {
  items: ItemMenu[];
  closeMenu: () => void;
};

export function MenuTemplate({
  items,
  closeMenu,
}: MenuPropsType): React.JSX.Element {
  return (
    <ul className="menu">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Item
              id={item.id}
              title={item.title}
              iconPath={item.iconPath}
              action={item.action}
              closeMenu={closeMenu}
            />
          </li>
        );
      })}
    </ul>
  );
}
