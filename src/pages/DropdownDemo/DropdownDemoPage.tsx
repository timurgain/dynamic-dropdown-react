import React from 'react';
import './DropdownDemoPage.css';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { TriggerElementTemplate as Trigger } from '../../components/UI/trigger-element-template/TriggerElementTemplate';
import { menuItems } from '../../utils/constants';

export function DropdownDemoPage(): React.JSX.Element {
  const [openOne, SetOpenOne] = React.useState<boolean>(false);
  const [openTwo, SetOpenTwo] = React.useState<boolean>(false);
  const [openThree, SetOpenThree] = React.useState<boolean>(false);
  const [openFour, SetOpenFour] = React.useState<boolean>(false);

  function handleClickOne() {
    SetOpenOne(!openOne);
    SetOpenTwo(false);
    SetOpenThree(false);
    SetOpenFour(false);
  }

  function handleClickTwo() {
    SetOpenOne(false);
    SetOpenTwo(!openTwo);
    SetOpenThree(false);
    SetOpenFour(false);
  }

  function handleClickThree() {
    SetOpenOne(false);
    SetOpenTwo(false);
    SetOpenThree(!openThree);
    SetOpenFour(false);
  }

  function handleClickFour() {
    SetOpenOne(false);
    SetOpenTwo(false);
    SetOpenThree(false);
    SetOpenFour(!openFour);
  }

  return (
    <main className="main">
      <section className="main__section">
        <Dropdown
          items={menuItems}
          triggerComponent={<Trigger />}
          tiggerAction={handleClickOne}
          open={openOne}
        />
        <Dropdown
          items={menuItems}
          triggerComponent={<Trigger />}
          tiggerAction={handleClickTwo}
          open={openTwo}
        />
        <Dropdown
          items={menuItems}
          triggerComponent={<Trigger />}
          tiggerAction={handleClickThree}
          open={openThree}
        />
        <Dropdown
          items={menuItems}
          triggerComponent={<Trigger />}
          tiggerAction={handleClickFour}
          open={openFour}
        />
      </section>
    </main>
  );
}
