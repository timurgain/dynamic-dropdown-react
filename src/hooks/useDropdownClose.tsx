export function useDropdownClose(isOpen: boolean, setClose: () => void) {
  function escClose() {
    function handleEscClose(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        setClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }

  function clickClose() {
    function handleClickClose(evt: MouseEvent) {
      const target = evt.target as HTMLElement;

      const isClosing = ['main', 'main__section'].some((cls) =>
        Array.from(target.classList).includes(cls),
      );
      if (isClosing) {
        setClose();
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickClose);
    }
    return () => {
      document.removeEventListener('click', handleClickClose);
    };
  }

  return { escClose, clickClose };
}
