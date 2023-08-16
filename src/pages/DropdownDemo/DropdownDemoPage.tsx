import React from "react";
import './DropdownDemoPage.css';
import { Dropdown } from "../../components/dropdown/Dropdown";


export function DropdownDemoPage(): JSX.Element {
  return (
    <main className="main">
      <section className="main__section">
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </section>
    </main>
  )
}
