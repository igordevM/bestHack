'use strict';

const env = process.env.NODE_ENV || "development";

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = require('config');
const serverConfig = { port: 3000 };
const exp_stat = { index: false };

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config.secretKey));
app.use(express.static('public', exp_stat));
//Now cookie parser become a middleware
//app.use(express.static('../../public'));
//Enable AJAX support
app.use(cors());


//Routes classes
const promiseGetIndexRouter = require('./routes/index');
const promiseGetAuthRouter  = require('./routes/auth');
const promiseGetRegRouter = require('./routes/register');

async function main() {
    const index = await promiseGetIndexRouter();
    const auth = await promiseGetAuthRouter(index);
    const register = await promiseGetRegRouter(auth);

    app.use('/', index.router);
    app.use('/auth', auth.router);
    app.use('/register', register.router);

    process.on('uncaughtException', async (err) => {
        //close file descriptors
        await index.middlewares.auth.db.close();
        console.error(err);
        process.exit(1);});

    process.on('SIGTERM', (err) => {
        app.close(async () => {
            await index.middlewares.auth.db.close();
            console.error(err);
        });
    });

    app.listen(serverConfig.port, () => { console.log(`The server is started on the port: ${serverConfig.port}!`)});
}

main();
