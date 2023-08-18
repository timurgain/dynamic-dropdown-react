import React from 'react';
import './Dropdown.css';
import { MenuTemplate as Menu } from '../UI/menu-template/MenuTemplate';
import type { ItemMenu } from '../../utils/constants';

type DropdownProps = {
  items: ItemMenu[];
  triggerComponent: React.ReactNode;
  triggerAction?: () => void;
  open: boolean;
};

export function Dropdown({
  items,
  triggerComponent,
  triggerAction,
  open,
}: DropdownProps): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  React.useEffect(() => setIsOpen(open), [open]);

  const [menuClass, setMenuClass] = React.useState<string>('dropdown__menu');
  const [triggerRect, setTriggerRect] = React.useState<{
    [key: string]: number;
  } | null>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    calcTriggerRect();
    window.addEventListener('scroll', calcTriggerRect);
    return () => window.removeEventListener('scroll', calcTriggerRect);
  }, []);

  React.useEffect(() => {
    function getOpenDirection() {
      if (triggerRect) {
        const { top, bottom, left, right } = triggerRect;
        const openX = left >= window.innerWidth - right ? 'left' : 'right';
        const openY = top >= window.innerHeight - bottom ? 'up' : 'down';
        return [openY, openX];
      }
      return [];
    }

    function getClass() {
      const [openY, openX] = getOpenDirection();
      const cls = ['dropdown__menu'];
      if (openX && openY) {
        cls.push(`dropdown__menu_${openY}-${openX}`);
      }
      return cls.join(' ');
    }

    setMenuClass(getClass());
  }, [triggerRect]);

  function calcTriggerRect() {
    if (triggerRef.current) {
      const { top, bottom, left, right } =
        triggerRef.current.getBoundingClientRect();
      setTriggerRect({ top, bottom, left, right });
    }
  }

  function handleOpenClose() {
    if (triggerAction) {
      triggerAction();
    } else {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className="dropdown">
      <button
        className="dropdown__trigger"
        onClick={handleOpenClose}
        ref={triggerRef}
      >
        {triggerComponent}
      </button>

      {isOpen && (
        <nav className={menuClass}>
          <Menu items={items} closeMenu={() => handleOpenClose()} />
        </nav>
      )}
    </div>
  );
}
