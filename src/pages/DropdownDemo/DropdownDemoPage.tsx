import React from 'react';
import './DropdownDemoPage.css';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { menuItems } from '../../utils/constants';

export function DropdownDemoPage(): React.JSX.Element {
  return (
    <main className="main">
      <section className="main__section">
        <Dropdown items={menuItems} />
        <Dropdown items={menuItems} />
        <Dropdown items={menuItems} />
        <Dropdown items={menuItems} />
      </section>
    </main>
  );
}
