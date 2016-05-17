import React from 'react';
import { subscribe } from 'horizon-react';
import { createDoc } from 'horizon-react/lib/utils';

import styles from './styles';

const AddTodoButton = (props) => {
  const collection = props.horizon('todos');
  const addTodo = (t) => createDoc(collection, { text: t });

  return (
    <div>
      <input
        id="todo-text"
        className={styles.input}
        type="text"
        placeholder="A new todo item..."
        autoFocus
        onKeyPress={function(e) { if (e.key === 'Enter') { addTodo(e.target.value); e.target.value = ''; } }}
      />
      <div
        className={styles.button}
        onClick={() => { addTodo(document.getElementById('todo-text').value); document.getElementById('todo-text').value = ''; }}
      >
      + Add todo
      </div>
    </div>
  );
};

export default subscribe()(AddTodoButton);
