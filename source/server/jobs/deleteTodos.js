import later from 'later';
import { r, r_internal } from '../db';

/**
 * Delete all todos every 10 minutes.
 */

const every10minutes = later.parse.text('every 10 minutes');

const deleteTodos = () => {
  r_internal.table('collections').get('todos').run()
  .then(function(result) {
    r.table(result.table).delete().run();
  });
};

later.setInterval(deleteTodos, every10minutes);
