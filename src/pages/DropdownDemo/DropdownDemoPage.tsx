import React from 'react';
import './DropdownDemoPage.css';
import { Dropdown } from '../../components/dropdown/Dropdown';
import sharePath from '../../assets/icon-share.svg';
import editPath from '../../assets/icon_edit.svg';
import deletePath from '../../assets/icon-delete.svg';

const ITEMS = [
  { id: 1, iconPath: sharePath, title: 'Поделиться в социальных сетях' },
  { id: 2, iconPath: editPath, title: 'Редактировать страницу' },
  { id: 3, iconPath: deletePath, title: 'Удалить страницу' },
];

export function DropdownDemoPage(): JSX.Element {
  return (
    <main className="main">
      <section className="main__section">
        <Dropdown items={ITEMS} />
        <Dropdown items={ITEMS} />
        <Dropdown items={ITEMS} />
        <Dropdown items={ITEMS} />
      </section>
    </main>
  );
}
