import React from 'react';

import subscribe from './lib/HorizonData';
import { createDoc, deleteDoc } from 'utils/horizon';

const mapData = () => ({
  todos: { collection: 'todos', query: {} }
});

const App = (props) => (
  <div>
    <h1>ToDo App Example - Again.</h1>
    <p>I'm connected to Horizon! And I HOT RELOAD! Dope.</p>
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
    <button
      onClick={() => {
        createDoc(props.horizon('todos'), { text: prompt('Enter todo text') }); // eslint-disable-line
      }}
    >
      + Add Todo
    </button>
  </div>
);

export default subscribe(mapData)(App);
