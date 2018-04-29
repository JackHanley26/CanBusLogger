const cfenv = require("cfenv");

import {logger as log} from '../logging.mjs'

// load local VCAP configuration  and service credentials
let vcapLocal, can_messages_db, cloudant;
try {
  vcapLocal = require('../../vcap-local.json');
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) {
}

const appEnvOpts = vcapLocal ? {vcap: vcapLocal} : {};

const appEnv = cfenv.getAppEnv(appEnvOpts);

if (appEnv.services['cloudantNoSQLDB'] || appEnv.getService(/cloudant/)) {
  // Load the Cloudant library.
  let Cloudant = require('cloudant');

  // Initialize database with credentials
  if (appEnv.services['cloudantNoSQLDB']) {
    // CF service named 'cloudantNoSQLDB'
    cloudant = Cloudant(appEnv.services['cloudantNoSQLDB'][0]);
  } else {
    // user-provided service with 'cloudant' in its name
    cloudant = Cloudant(appEnv.getService(/cloudant/));
  }
  let dbName = 'can_messages';

  // Create a new "mydb" database.
  cloudant.db.create(dbName, function (err, data) {
    if (!err) //err if database doesn't already exists
      log.info("Created database: " + dbName);
  });

  can_messages_db = cloudant.db.use(dbName);

  can_messages_db.insert({name: 'sample', type: 'trace'}, (err, data) => {
    if (err) {
      log.error('error inserting: ' + err);
    }
    log.info('inserted: ' + data);

  });

}