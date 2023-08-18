import React from 'react';
import './MenuItemTemplate.css';
import type { ItemMenu } from '../../../utils/constants';

type MenuItemProps = ItemMenu & {
  closeMenu: () => void;
};

export function MenuItemTemplate({
  title,
  iconPath,
  action,
  closeMenu,
}: MenuItemProps): React.JSX.Element {
  function handleClick() {
    action(title);
    closeMenu();
  }

  return (
    <button className="item" onClick={handleClick}>
      <span className="item__title">{title}</span>
      <img className="item__img" src={iconPath} alt="Icon" />
    </button>
  );
}
