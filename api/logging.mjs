import bunyan from 'bunyan'
import {config} from './config.mjs'


export function reqSerializer(req) {
  let headers = {};
  Object.keys(req.headers).map(function (key) {
    if (key === "authorization") {
      headers[key] = "masked";
    } else {
      headers[key] = req.headers[key];
    }
  });
  return {
    ip: req.clientIp,
    method: req.method,
    url: req.url,
    headers: headers
  };
}

export function logger() {
  return bunyan.createLogger({
    name: "computergroupsAPI",
    src: config.debugging ? config.debugging.includeSrcInLogs : false,
    streams: [
      {
        level: config.debugging ? config.debugging.stdoutLoglevel : "info",
        stream: process.stdout // log INFO and above to stdout
      },
      {
        level: config.debugging ? config.debugging.stderrLoglevel : "error",
        stream: process.stderr // log ERROR and above to stderr
      }
    ],
    serializers: {
      err: bunyan.stdSerializers.err,
      req: reqSerializer,
      res: bunyan.stdSerializers.res
    }
  })
}
