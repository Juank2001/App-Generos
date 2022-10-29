const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const path = require('path');
const cors = require('cors');
const morgan = require('morgan')

const publicPath = path.resolve(__dirname, '../public');
const rutas = require('../router/router');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public/views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'))

rutas(app);

app.use(express.static(publicPath));

module.exports = app;
