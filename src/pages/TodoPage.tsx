import axios from 'axios';
import React, { FC } from 'react';
import List from '../components/List';
import { TodoList } from '../components/TodoList';
import { ITodos } from '../types/types';

export const TodoPage: FC = () => {
  const [todos, setTodos] = React.useState<ITodos[]>([]);

  React.useEffect(() => {
    async function fetchTodos() {
      try {
        const { data } = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos');
        setTodos(data);
      } catch (error) {
        console.log(error, 'Ошибка при получении данных с сервера');
        alert('Что-то пошло не так, но мы работаем');
      }
    }
    fetchTodos();
  }, []);

  return (
    <List items={todos} renderItem={(todo: ITodos) => <TodoList key={todo.id} todo={todo} />} />
  );
};
