var restify = require('restify'), // require the restify library.
  server = restify.createServer(); // create an HTTP server.
server.use(restify.bodyParser());


const db = [];
// add a route that listens on http://localhost:5000/hello/world
server.get('/',  (req, res, cb) => {
  res.send(db);
  cb();
});

server.post('/',  (req, res, cb) => {
  db.push(JSON.parse(req.body));
  res.send(db);
  cb();
});

server.put('/:index', (req, res, cb) => {
  db[req.params.id] = JSON.parse(req.body)  ;
  res.send(db);
  cb();
});


server.listen(process.env.PORT || 5000, function () { // bind server to port 5000.
  console.log('%s listening at %s', server.name, server.url);
});