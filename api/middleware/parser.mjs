/**
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2018. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */



function parse(req, res, next) {

  if (req.headers.orgdoc && typeof req.headers.orgdoc === "string") {
    req.orgDoc = JSON.parse(req.headers.orgdoc);
  } else if (req.headers.orgdoc) {
    req.orgDoc = req.headers.orgdoc;
  }

  if (req.headers.nodedetails && typeof req.headers.nodedetails === "string") {
    req.nodeDetails = JSON.parse(req.headers.nodedetails);
  } else if (req.headers.nodedetails) {
    req.nodeDetails = req.headers.nodedetails;
  }

  return next();
}


module.exports = {
  parse: parse
};