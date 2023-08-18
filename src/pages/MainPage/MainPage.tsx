import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import iconTreePath from '../../assets/more-actions.svg';
import iconFourPath from '../../assets/icon-grid.svg';

export function MainPage(): React.JSX.Element {
  return (
    <main className="main-page">
      <h1 className="main-page__title">Custom Dropdown demo</h1>
      <section className="main-page__section">
        <Link className="main-page__link" to="/three">
          <img className="item__img" src={iconTreePath} alt="Icon" />
          <span>Three in a row</span>
        </Link>
        <Link className="main-page__link" to="/four">
          <img className="item__img" src={iconFourPath} alt="Icon" />
          <span>Four in corners</span>
        </Link>
      </section>
    </main>
  );
}
