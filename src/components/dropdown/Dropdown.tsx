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
  // className state
  const [menuClass, setMenuClass] = React.useState<string>('dropdown__menu');

  // External open-close control if needed
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  React.useEffect(() => setIsOpen(open), [open]);

  // Screen dimensions
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  const [screenHeight, setScreenHeight] = React.useState<number>(0);

  function calcScreenSize() {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }

  // Trigger dimensions
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [triggerRect, setTriggerRect] = React.useState<{
    [key: string]: number;
  } | null>(null);

  function calcTriggerRect() {
    if (triggerRef.current) {
      const { top, bottom, left, right, width, height } =
        triggerRef.current.getBoundingClientRect();
      setTriggerRect({ top, bottom, left, right, width, height });
    }
  }

  // Menu dimensions
  const menuRef = React.useRef<HTMLElement>(null);
  const [menuRect, setMenuRect] = React.useState<{
    [key: string]: number;
  } | null>(null);

  function calcMenuRect() {
    if (menuRef.current) {
      const { top, bottom, left, right, width, height } =
        menuRef.current.getBoundingClientRect();
      setMenuRect({ top, bottom, left, right, width, height });
    }
  }

  // Listen to scroll and resize then Set dimensions
  React.useEffect(() => {
    function calcDimensions() {
      calcTriggerRect();
      calcMenuRect();
      calcScreenSize();
    }
    calcDimensions();

    window.addEventListener('scroll', calcDimensions);
    window.addEventListener('resize', calcDimensions);
    return () => {
      window.removeEventListener('scroll', calcDimensions);
      window.removeEventListener('resize', calcDimensions);
    };
  }, []);

  // Calculate menu position
  React.useEffect(() => {
    function getOpenDirection() {
      if (triggerRect) {
        const { top, bottom, left, right } = triggerRect;
        const openX = left >= screenWidth - right ? 'left' : 'right';
        const openY = top >= screenHeight - bottom ? 'up' : 'down';
        return [openY, openX];
      }
      return [];
    }

    function enoughSpace() {
      if (menuRect && triggerRect) {
        const { width: menuWidth, height: menuRight } = menuRect;
        const { width: triggerWidth, height: triggerHeight } = triggerRect;
        const widthOk = triggerWidth + menuWidth < screenWidth ? true : false;
        const heightOk =
          triggerHeight + menuRight < screenHeight ? true : false;

        // console.log('widthOk', triggerWidth + menuWidth, '<', screenWidth, '=', widthOk)
        // console.log('heightOk', triggerHeight + menuRight, '<', screenHeight, '=', heightOk)

        if (widthOk && heightOk) {
          return true;
        }
      }
      return false;
    }

    function getClass() {
      const [openY, openX] = getOpenDirection();
      const clsBase = 'dropdown__menu';
      const clsDirection =
        openX && openY ? `dropdown__menu_${openY}-${openX}` : '';
      const clsVisiability = enoughSpace() ? '' : 'dropdown__menu_hidden';
      if (menuRef.current) {
        return [clsBase, clsDirection, clsVisiability].join(' ');
      } else {
        return [clsBase, clsDirection].join(' ');
      }
    }
    if (screenWidth > 1) {
      setMenuClass(getClass());
    }
  }, [triggerRect, menuRect, screenWidth, screenHeight]);

  // Open/Close handler
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
        <nav ref={menuRef} className={menuClass}>
          <Menu items={items} closeMenu={() => handleOpenClose()} />
        </nav>
      )}
    </div>
  );
}
