import React from 'react';
import './Dropdown.css';
import { ButtonTemplate as Button } from '../UI/button-template/ButtonTemplate';
import { MenuTemplate as Menu } from '../UI/menu-template/MenuTemplate';

export type ItemMenu = {
  id: number;
  iconPath: string;
  title: string;
};

type DropdownProps = {
  items: ItemMenu[];
};

export function Dropdown({ items }: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function getClass() {
    const cls = ['dropdown__menu'];

    cls.push('dropdown__menu_down-right');

    return cls.join(' ');
  }

  return (
    <div className="dropdown">
      <Button onClick={handleClick} />

      {isOpen && (
        <div className={getClass()}>
          <Menu items={items} />
        </div>
      )}
    </div>
  );
}
