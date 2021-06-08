import { watch } from 'gulp';
import { pug } from './pug';

export const WatchFiles = (done) => {
    watch(/index.pug, Pug)
    done();
};