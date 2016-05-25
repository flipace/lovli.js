import rethinkdbdash from 'rethinkdbdash';
import config from '../../config/db';

export const r = rethinkdbdash(config);

var config_internal = Object.assign({}, config);
config_internal.db = config.db + '_internal';
export const r_internal = rethinkdbdash(config_internal);
