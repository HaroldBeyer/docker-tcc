const express = require('express');
const { DB } = require('./db/db');

const app = express();

const PORT = 3000;


app.listen(8080, () => {
    console.log("App listening at port" + PORT)
});