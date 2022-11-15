import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './layout/MainLayout';
import { PracticPage } from './pages/PracticPage';
import { TodoPage } from './pages/TodoPage';
import { UserItemPage } from './pages/UserItemPage';
import { UsersPage } from './pages/UsersPage';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/other-practic" element={<PracticPage />} />
      </Route>
    </Routes>
  );
};
