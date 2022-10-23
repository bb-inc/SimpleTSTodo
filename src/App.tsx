import React from 'react';
import { Header } from './components/Header/Header';
import { TodoPanel } from './components/TodoPanel/TodoPanel';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false },
  { id: 2, name: 'task 2', description: 'description 2', checked: false },
  {
    id: 3,
    name: 'task 3',
    description:
      'so long task description 3 so long task description so long task description so long task description so long task description',
    checked: true
  }
];

export const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  return (
    <div>
      <div>
        <Header todoCount={todos.length}/>
        <TodoPanel />
      </div>
    </div>
  );
};

