import React, { FC } from 'react';

//* Если стоит T, то мы ожидаем объект с абсолютно любым типом
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <div className="list">{props.items.map(props.renderItem)}</div>;
}
