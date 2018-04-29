import api from './api/api.mjs';
import express from 'express'
import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '5mb'}));


// api routes
api(app);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
