import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemListProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

export const UserItemList: FC<UserItemListProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} className="list__item" key={user.id}>
      <p>
        {user.id}. {user.name} проживает в городе {user.address.city} на улице
        {user.address.street} с почтовым адрессом {user.address.zipcode}.
      </p>
    </div>
  );
};
