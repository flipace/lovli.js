import rethinkdbdash from 'rethinkdbdash';
import config from '../../config/db';

const r = rethinkdbdash(config);

export default r;
