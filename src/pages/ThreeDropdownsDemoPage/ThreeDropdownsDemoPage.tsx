import React from 'react';
import './ThreeDropdownsDemoPage.css';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { TriggerElementTemplate as Trigger } from '../../components/UI/trigger-element-template/TriggerElementTemplate';
import { menuItems } from '../../utils/constants';
import { useDropdownClose } from '../../hooks/useDropdownClose';

export function ThreeDropdownsDemoPage(): React.JSX.Element {
  const [openOne, SetOpenOne] = React.useState<boolean>(false);
  const [openTwo, SetOpenTwo] = React.useState<boolean>(false);
  const [openThree, SetOpenThree] = React.useState<boolean>(false);

  const dropdowns: [boolean, React.Dispatch<React.SetStateAction<boolean>>][] =
    [
      [openOne, SetOpenOne],
      [openTwo, SetOpenTwo],
      [openThree, SetOpenThree],
    ];
  const isAnyOpen = openOne || openTwo || openThree;

  const { escClose, clickClose } = useDropdownClose(isAnyOpen, closeAll, [
    'main-three',
    'main-three__section',
  ]);
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
    <main className="main-three">
      <section className="main-three__section">
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
