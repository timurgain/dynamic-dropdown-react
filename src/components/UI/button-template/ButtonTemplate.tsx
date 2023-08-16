import React from 'react';
import './ButtonTemplate.css';

type ButtonProps = {
  onClick: () => void;
};

export function ButtonTemplate({ onClick }: ButtonProps): JSX.Element {
  return <button className="button" onClick={onClick} />;
}
