import React from 'react';
import './MenuTemplate.css';
import { MenuItemTemplate as Item } from '../menu-item-template/MenuItemTemplate';
import type { ItemMenu } from 'src/components/dropdown/Dropdown';

type MenuPropsType = {
  items: ItemMenu[];
};

export function MenuTemplate({ items }: MenuPropsType): JSX.Element {
  return (
    <nav>
      <ul className="menu">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Item title={item.title} iconPath={item.iconPath} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
