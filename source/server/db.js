import rethinkdbdash from 'rethinkdbdash';
import config from '../../config/db';

export const r = rethinkdbdash(config);

const configInternal = Object.assign({}, config);
configInternal.db = `${config.db}_internal`;
export const r_internal = rethinkdbdash(configInternal);
