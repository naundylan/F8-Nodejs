const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db/index');
// app.use(morgan("combined"))

// database
db.connect();

// middleWare
app.use(express.urlencoded());
app.use(express.json());

// static file
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine(
    'hb',
    engine({
        extname: '.hb',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hb');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () =>
    console.log(`app listening at http://localhost:${port}`),
);
