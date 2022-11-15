import axios from 'axios';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../components/List';
import { UserItemList } from '../components/UserItemList';
import { IUser } from '../types/types';

export const UsersPage: FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
      } catch (error) {
        console.log(error, 'Ошибка при получении данных с сервера');
        alert('Что-то пошло не так, но мы работаем');
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItemList key={user.id} user={user} onClick={() => navigate('/users/' + user.id)} />
        )}
      />
    </>
  );
};
