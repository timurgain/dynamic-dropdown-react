import React from 'react';
import './ButtonTemplate.css';

type ButtonProps = {
  buttonRef: React.RefObject<HTMLButtonElement> | null;
  onClick: () => void;
};

export function ButtonTemplate({
  buttonRef,
  onClick,
}: ButtonProps): React.JSX.Element {
  return <button ref={buttonRef} className="button" onClick={onClick} />;
}
