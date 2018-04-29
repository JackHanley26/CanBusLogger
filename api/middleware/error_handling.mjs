import {logger as log} from '../logging.mjs'
import {HttpError} from "../error.mjs";

export default function errorHandling(err, req, res, next) {

  if (err === "notfound" || err === "ENOTFOUND" || err.message === "Forbidden" /* from static middleware */) {
    return res.status(404).json({
      error: "Not found."
    });
  } else if (err === "nodata") {
    return res.status(204).end();
  } else if (err === "invalidinput") {
    return res.status(400).json({
      error: "Invalid input."
    });
  } else if (err === "unauthorized") {
    return res.status(401).json({
      error: "Not authorized."
    });
  } else if (err === "unauthorized because session is invalid") {
    return res.status(401).json({
      error: "Not authorized because session is invalid."
    });
  } else if (err === "denied") {
    return res.status(403).json({
      error: "Access denied."
    });
  }

  if (err instanceof HttpError) {
    return res.status(err.httpCode).json({
      error: err.message
    });
  }

  // The JSON body failed to be parsed by the JSON body parser
  if (err instanceof SyntaxError) {
    //JSON Body parser contains a "status" it recommends setting
    if (err.hasOwnProperty('status')) {
      return res.status(err.status).json({
        error: "Invalid JSON."
      });
    } else {
      return res.status(400).json({
        error: "Invalid JSON."
      });
    }
  }

  if (!req.logger) {
    req.logger = log;
  }
  req.logger.error({err: err}, "Internal error.");
  res.status(500).json({error: "Internal error."});
};
