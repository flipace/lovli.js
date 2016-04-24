import React from 'react';
import { subscribe } from 'horizon-react';
import { deleteDoc } from 'horizon-react/lib/utils';

// Simple subscription
const mapDataObject = () => ({
  todos: { collection: 'todos', query: {} }
});

// Advanced subscription
const mapDataArray = [
  {
    query: (hz, props) => hz('todos').limit(props.limit),
    name: 'todos'
  }
];

const TodoList = (props) => (
  <ul>
    {props.todos.map(
      todo => (
        <li key={todo.id}>
          {todo.text}
          <span
            onClick={() => {
              deleteDoc(props.horizon('todos'), { id: todo.id });
            }}
          >
            (x)
          </span>
        </li>
      )
    )}
  </ul>
);

export default subscribe(mapDataObject)(TodoList);
