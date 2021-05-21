const bodyParser = require('body-parser');
const express = require('express');
const requestRouter = require('./routers/request-router');
const scheduleRouter = require('./routers/schedule-router');
const serviceRouter = require('./routers/service-router');

const app = express();


const PORT = 3000;

const HOST = "0.0.0.0";

app.use(bodyParser.json());

app.use('/request', requestRouter);

app.use('/service', serviceRouter);

app.use('/schedule', scheduleRouter);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);