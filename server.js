// Your server will live here
// import connect
let express = require('express');
let app = express(); // Now app is instance of connect server
// Create a port constant
const localport = 3000;
// start listening on the port
/*
* Get port from envrionment and store in Express
*/ var process: NodeJS.Process;

let port = process.env.port || localport;

app.listen(port);
console.log(`Server started at ${port}`);

// ROUTING - Mounted our routes

// Second route is '/hello' which is root of my website
app.use('/hello', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello, World!");
    next();
});

// req = request
// res = response
// next = next response in queue

// First route is '/' which is root of my website
app.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome!");
    next();
});


/*
function logger(req, res, next){
    console.log(req.method, req.url);
    next();
};

function helloWorld(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
};

function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
}

app.use(logger);
*/