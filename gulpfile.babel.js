
import { parallel, series } from 'gulp';
import { Serve } from './gulp/tasks/server';
import { WatchFiles } from './gulp/tasks/watch';
import { Pug } from './gulp/tasks/pug';

const RunServer = parallel (
  Serve,
  WatchFiles
);

const Build = series (
  series (
    Pug
  ),
  RunServer
)
exports.default = RunServer;