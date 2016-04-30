import React from 'react';
import { deleteDoc } from 'horizon-react/lib/utils';

import styles from './styles';

/**
 * A single todo list item.
 *
 * Includes a remove action.
 *
 * @param  {Object} todo    The todo item
 * @param  {Object} horizon The horizon object which will be passed to deleteDoc
 * @return {ReactElement}
 */
export default ({ todo, horizon }) => (
  <li className={styles.item} key={todo.id}>
    <span className={styles.caption}>{todo.text || '-'}</span>
    <span className={styles.actions}>
      <i
        className="fa fa-remove"
        onClick={() => {
          deleteDoc(horizon('todos'), { id: todo.id });
        }}
      />
    </span>
  </li>
);
