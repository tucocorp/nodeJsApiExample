import express from 'express';
import routes from './src/routes/apiRoutes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nodeApiDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// body parser set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);

// Serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT,() =>
  console.log(`You server is running on port ${PORT}`)
);
