import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MainLayout: FC = () => {
  return (
    <main className="main">
      <div className="main__container">
        <nav className="main__nav">
          <Link to="/users">Пользователи</Link>
          <Link to="/todos">Тудушки</Link>
          <Link to="/other-practic">Другая практика</Link>
        </nav>
        <div className="main__body body-main">
          <div className="body-main__list">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
