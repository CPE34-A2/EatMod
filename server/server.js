require('./config/config');

const path = require('path');
const color = require('chalk');
const log = require('./utils/log');

const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./database/knex');

const app = express();
const port = (process.env.PORT || 8080);

const appRoute = require('./routes/app');
const apiRoute = require('./routes/api');

const publicPath = path.join(__dirname + '/../public');
const viewPath = path.join(publicPath + '/views');

app.set('view engine', 'ejs');
app.set('views', viewPath);
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRoute);
app.use('/api', apiRoute);

// Error Handler
app.use((req, res, err) => {
  let statusCode = (err.status || 500);
  console.log(`${statusCode} : ${err.message}`);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(color.yellow('███████╗ █████╗ ████████╗███╗   ███╗ ██████╗ ██████╗ '));
  console.log(color.yellow('██╔════╝██╔══██╗╚══██╔══╝████╗ ████║██╔═══██╗██╔══██╗'));
  console.log(color.yellow('█████╗  ███████║   ██║   ██╔████╔██║██║   ██║██║  ██║'));
  console.log(color.yellow('██╔══╝  ██╔══██║   ██║   ██║╚██╔╝██║██║   ██║██║  ██║'));
  console.log(color.yellow('███████╗██║  ██║   ██║   ██║ ╚═╝ ██║╚██████╔╝██████╔╝'));
  console.log(color.yellow('╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ '));
  log.success(log.prefix.WEB, `Server is up on http://localhost:${port}`);

  knex.raw('select 0').catch(err => {
    log.error(log.prefix.DATABASE, `Can't connect to the database! (${err.sqlMessage})`);
    log.warn(log.prefix.WEB, `Server has closed...!`);
    process.exit();
  }).finally(() => {
    log.success(log.prefix.DATABASE, `The database connection established`);
  });
});