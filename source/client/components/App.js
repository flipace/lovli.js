import React from 'react';

import subscribe from './lib/HorizonData';
import createDoc from '../../utils/horizon/createDoc';

const mapData = () => ({
  todos: { collection: 'todos', query: {} }
});

const App = (props) => (
  <div>
    <h1>ToDo App Example - Again.</h1>
    <p>I'm connected to Horizon!</p>
    <ul>
      {props.todos.map(
        todo => <li key={todo.id}>{todo.text}</li>
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
