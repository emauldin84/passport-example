// FIRST! bring in dotenv
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT;
const FileStore = require('session-file-store')(session);
const setupAuth = require('./auth');


// const S3KRET = require('./config');
// tell express to use the session modules
app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET
}));

// Only after we have sessions setup with express
// is it ok to attach the passport authentication
setupAuth(app);


app.get('/', (req, res) => {
    res.send(`
    <p> Hello! </p>
    `)
});



app.listen(port, () => {
    console.log(`Running at port: ${port}`)
})