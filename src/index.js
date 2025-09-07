const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db/index');
const SortMiddleware = require('./app/middlewares/sortMiddleware');
// app.use(morgan("combined"))

// database
db.connect();

// custom middleWare
app.use(SortMiddleware);

// middleWare
app.use(express.urlencoded());
app.use(express.json());

// static file
app.use(express.static(path.join(__dirname, 'public')));

// method override
app.use(methodOverride('_method'))

// template engine
app.engine(
    'hb',
    engine({
        extname: '.hb',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hb');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () =>
    console.log(`app listening at http://localhost:${port}`),
);
