import React from 'react';

import TodoList from './todos/TodoList';
import AddTodoButton from './todos/AddTodoButton';

const App = () => (
  <div>
    <h1>ToDo App Example</h1>
    <p>Connected to Horizon.</p>
    <TodoList limit={5} />
    <AddTodoButton />
  </div>
);

export default App;
