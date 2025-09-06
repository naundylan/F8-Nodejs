const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db/index');
const SortMiddleware = require('./app/middlewares/SortMiddleware');
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
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const icons = {
                    default: 'fa-solid fa-sort',
                    asc: 'fa-solid fa-sort-up',
                    desc: 'fa-solid fa-sort-down',
                }
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                }

                const type = types[sort.type]
                const icon = icons[sort.type]
                return `<a href="?_sort&column=title&type=${type}"><span class="${icon}">d</span></a>`;
            }
        },
    }),
);
app.set('view engine', 'hb');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () =>
    console.log(`app listening at http://localhost:${port}`),
);
