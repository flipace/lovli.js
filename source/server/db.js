import rethinkdbdash from 'rethinkdbdash';
import config from '../../config/db';

export const r = rethinkdbdash(config);
