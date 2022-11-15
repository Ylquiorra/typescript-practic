import React, { FC } from 'react';
import { ITodos } from '../types/types';

interface TodoListProps {
  todo: ITodos;
}

export const TodoList: FC<TodoListProps> = ({ todo }) => {
  return (
    <div className="todos">
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  );
};
