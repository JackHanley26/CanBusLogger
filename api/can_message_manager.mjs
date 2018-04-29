import {logger as log} from './logging'

const store_trace_file = (req, res, next) => {
  log.info()
};


export const mgr = {
  store_trace_file: store_trace_file
};