const path = require('path');
const log4js = require('log4js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressStaticGzip = require("express-static-gzip");
const express = require('express');
const app = express();
const logger = log4js.getLogger();
const config = require('../config/config.js');
const session = require('express-session');

const demoRouter = require('./routers/animalRouter');

// Configure log4j
log4js.configure({
    appenders: {
        dateFile: {
            type: 'dateFile',
            filename: `${config.LOGGER_PATH}/logger`,
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
        },
        out: {
            type: 'stdout'
        },
    },
    categories: {
        default: {
            appenders: ['dateFile', 'out'],
            level: 'debug'
        },
    },
});

// Dev
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    name: 'session-name', // 这里是cookie的name，默认是connect.sid
    secret: 'my_session_secret', // 建议使用 128 个字符的随机字符串
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000
    }
}));

// Express Gzip
app.use('/assets', expressStaticGzip(path.resolve(__dirname + '/../build/assets'), {
    index: false,
    customCompressions: [{
        encodingName: 'gzip',
        fileExtension: 'gz'
    }]
}));

// Configure static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../build')));

// Configure controller router
app.use('/animal', demoRouter); // Express Middleware

// Send resource
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../build', 'index.html'));
});

// App start
const port = process.env.PORT || 3005;
app.listen(port, () => {
    logger.info(`app listening on port: ${port}`);
});