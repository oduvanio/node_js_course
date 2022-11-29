const http = require('http');
const EventEmitter = require('events');
const Router = require('./framework/Router');
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const bodyParser = require('./framework/bodyParser');
const urlParser = require('./framework/parseUrl');
const PORT = process.env.PORT || 5000;

const emitter = new EventEmitter();

const app = new Application();

app.use(jsonParser);
app.use(bodyParser);
app.use(urlParser('http://localhost:5000'));
app.addRouter(userRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
});
