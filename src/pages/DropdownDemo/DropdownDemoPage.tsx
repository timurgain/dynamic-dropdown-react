import React from 'react';
import './DropdownDemoPage.css';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { TriggerElementTemplate as Trigger } from '../../components/UI/trigger-element-template/TriggerElementTemplate';
import { menuItems } from '../../utils/constants';
import { useDropdownClose } from '../../hooks/useDropdownClose';

export function DropdownDemoPage(): React.JSX.Element {
  const [openOne, SetOpenOne] = React.useState<boolean>(false);
  const [openTwo, SetOpenTwo] = React.useState<boolean>(false);
  const [openThree, SetOpenThree] = React.useState<boolean>(false);
  const [openFour, SetOpenFour] = React.useState<boolean>(false);

  const dropdowns: [boolean, React.Dispatch<React.SetStateAction<boolean>>][] =
    [
      [openOne, SetOpenOne],
      [openTwo, SetOpenTwo],
      [openThree, SetOpenThree],
      [openFour, SetOpenFour],
    ];
  const isAnyOpen = openOne || openTwo || openThree || openFour;

  const { escClose, clickClose } = useDropdownClose(isAnyOpen, closeAll);
  React.useEffect(escClose, [isAnyOpen, escClose]);
  React.useEffect(clickClose, [isAnyOpen, clickClose]);

  function closeAll() {
    dropdowns.forEach(([, setOpen]) => setOpen(false));
  }

  function handleClick(index: number) {
    closeAll();
    const [open, setOpen] = dropdowns[index];
    setOpen(!open);
  }

  return (
    <main className="main">
      <section className="main__section">
        {dropdowns.map(([open], index) => {
          return (
            <Dropdown
              key={index}
              items={menuItems}
              triggerComponent={<Trigger />}
              triggerAction={() => handleClick(index)}
              open={open}
            />
          );
        })}
      </section>
    </main>
  );
}
