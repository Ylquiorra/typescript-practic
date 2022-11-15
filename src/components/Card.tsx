import React, { FC } from 'react';

//Ожидающиеся значения
export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  //Если стоит ?, то TS не будет требовать эти пропсы в родителе
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactNode; //! В видео не так
  handleClick: (num: number) => void; //* Если функция ничего не возвращает - пишем void. Если что то возвращает - пишем number, string, boolean и т.д.
}

// Знаю, что писать инлайн слити очень плохо так, но это практики ради
export const Card: FC<CardProps> = ({ width, height, variant, children, handleClick }) => {
  const [count, setCount] = React.useState(0);

  return (
    <div
      onClick={() => handleClick(count)}
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : '',
      }}>
      {children}
    </div>
  );
};
