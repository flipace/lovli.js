import React from 'react';
import { subscribe } from 'horizon-react';
import { createDoc } from 'horizon-react/lib/utils';

const AddTodoButton = (props) => (
  <button onClick={() => {
    createDoc(
      props.horizon('todos'),
      { text: prompt('Enter todo text:') } // eslint-disable-line
    );
  }}
  > + Add a todo </button>
);

export default subscribe()(AddTodoButton);
