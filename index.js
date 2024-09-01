const express = require('express');
const app = express();
const PORT = 5000;
const main = require('./routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cors = require('cors');

mongoose.connect("mongodb+srv://bhautik:12345@bhautik.jwdpxcv.mongodb.net/family").then(() => console.log("Mongo Db Server started"));

app.use(bodyParser());
app.use(Cors());
app.use('/api', main);

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`)
});