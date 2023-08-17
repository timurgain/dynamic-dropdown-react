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

export function Dropdown({ items }: DropdownProps): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  function getOpenDirection(): string[] {
    if (buttonRef.current) {
      const { top, bottom, left, right } =
        buttonRef.current.getBoundingClientRect();
      const openX = left >= window.innerWidth - right ? 'left' : 'right';
      const openY = top >= window.innerHeight - bottom ? 'up' : 'down';
      return [openY, openX];
    }
    return [];
  }

  function getClass(): string {
    const [openY, openX] = getOpenDirection();
    const cls = ['dropdown__menu'];
    if (openX && openY) {
      cls.push(`dropdown__menu_${openY}-${openX}`);
    }
    return cls.join(' ');
  }

  function handleClick(): void {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <Button buttonRef={buttonRef} onClick={handleClick} />

      {isOpen && (
        <nav className={getClass()}>
          <Menu items={items} />
        </nav>
      )}
    </div>
  );
}
