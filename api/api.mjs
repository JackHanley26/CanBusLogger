import cors from 'cors'
import error_handling from './middleware/error_handling.mjs'

import {mgr} from './can_message_manager.mjs'

const corsOptions = {
  origin: '*'
};

export default function (app) {

  app.use(cors(corsOptions));
  app.options('*', cors());
  app.get("/", (req, res, next) => res.send("API"));

  app.get("/api/test", (req, res, next) => res.send("Hey! This is the CAN bus logger"));
  app.post('/api/canbuslogger/log', mgr.store_trace_file);

  app.use((req, res, next) => next("notfound"));
  app.use(error_handling);
}
