import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { ThreeDropdownsDemoPage } from '../../pages/ThreeDropdownsDemoPage/ThreeDropdownsDemoPage';
import { FourDropdownsDemoPage } from '../../pages/FourDropdownsDemoPage/FourDropdownsDemoPage';

export function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/three" element={<ThreeDropdownsDemoPage />} />
      <Route path="four" element={<FourDropdownsDemoPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
