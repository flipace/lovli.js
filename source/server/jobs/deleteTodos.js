import later from 'later';
import { r } from '../db';

/**
 * Delete all todos every 10 minutes.
 */

const every10minutes = later.parse.text('every 10 minutes');

const deleteTodos = () => {
  r.table('todos').delete().run();
};

later.setInterval(deleteTodos, every10minutes);
