import React, { FC } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import { IUser } from '../types/types';

interface UserItemPageParams {
  id: number;
}

export const UserItemPage: FC = () => {
  const [user, setUser] = React.useState<IUser | null>(null);
  const params = useParams();

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get<IUser>(
          'https://jsonplaceholder.typicode.com/users/' + params.id,
        );
        setUser(data);
      } catch (error) {
        console.log(error, 'Ошибка при получении данных с сервера');
        alert('Что-то пошло не так, но мы работаем');
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <section className="user-info">
        <div className="user-info__body">
          <div className="user-body-info__discription">
            <Link to="/users">
              <p>Вернуться назад</p>
            </Link>
            <h1>Страница пользователя {user?.name}</h1>
            <p>{user?.phone}</p>
            <p>{user?.email}</p>
          </div>
        </div>
      </section>
    </>
  );
};
