import { src, dest } from 'gulp'
import pug from 'gulp-pug'
export const pug = ( done ) => {
    src ('/*.pug')
    .pipe (pug({
        pretty: '    '
    }))
    .pipe (dest('build'))
    done ();

};