import React from 'react';
import './MenuItemTemplate.css';

type ItemProps = {
  title: string;
  iconPath: string;
};

export function MenuItemTemplate({
  title,
  iconPath,
}: ItemProps): React.JSX.Element {
  return (
    <div className="item">
      <span className="item__title">{title}</span>
      <img className="item__img" src={iconPath} alt="Icon" />
    </div>
  );
}
