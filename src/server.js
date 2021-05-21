const express = require('express');
const requestRouter = require('./routers/request-router');
const scheduleRouter = require('./routers/schedule-router');
const serviceRouter = require('./routers/service-router');

const app = express();

const PORT = 3000;

app.use('/request', requestRouter);

app.use('/service', serviceRouter);

app.use('/schedule', scheduleRouter);

app.listen(PORT, () => {
    console.log("App listening at port " + PORT)
});