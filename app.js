const express = require('express');
const bodyParser = require('body-parser');
const authenticationRouter = require('./routes/authentication.route');
const homeScreenDataRouter = require('./routes/homeScreenData.route');
const tutorialVideoRouter = require('./routes/tutorialVideo.route');
const tutorialServiceRouter = require('./routes/tutorialService.route');



const app = express();

app.use(bodyParser.json());

app.use('/home', homeScreenDataRouter);
app.use('/authentication/', authenticationRouter);
app.use('/videos/', tutorialVideoRouter);
app.use('/services/', tutorialServiceRouter);

module.exports = app;


//* Here goes the configuration of your express app