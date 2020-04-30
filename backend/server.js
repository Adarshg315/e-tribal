const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');
require('dotenv').config();

const app = express();
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use('/products', productsRouter);
app.use('/users', usersRouter);

// require('dotenv').load();

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_BRAND_NAME = process.env.NEXMO_BRAND_NAME;

const nexmo = new Nexmo(
  {
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET,
  },
  {
    debug: true,
  }
);

let verifyRequestId = null;
let verifyRequestNumber = null;

app.use(express.static('public'));

app.use(
  session({
    secret: 'loadsofrandomstuff',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  /*
        If there is a session for the user, the `index.html`
        page will display the number that was used to log
        in. If not, it will prompt them to log in.
    */
  if (!req.session.user) {
    res.render('index', {
      brand: NEXMO_BRAND_NAME,
    });
  } else {
    res.render('index', {
      number: req.session.user.number,
      brand: NEXMO_BRAND_NAME,
    });
  }
});

app.get('/login', (req, res) => {
  // Display the login page
  res.render('login');
});

app.post('/verify', (req, res) => {
  // Start the verification process
  verifyRequestNumber = req.body.number;
  nexmo.verify.request(
    {
      number: verifyRequestNumber,
      brand: NEXMO_BRAND_NAME,
    },
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        verifyRequestId = result.request_id;
        console.log(`request_id: ${verifyRequestId}`);
      }
    }
  );
  /* 
        Redirect to page where the user can 
        enter the code that they received
     */
  res.render('entercode');
});

app.post('/check-code', (req, res) => {
  // Check the code provided by the user
  nexmo.verify.check(
    {
      request_id: verifyRequestId,
      code: req.body.code,
    },
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        if (result.status == 0) {
          /* 
                    User provided correct code,
                    so create a session for that user
                */
          req.session.user = {
            number: verifyRequestNumber,
          };
        }
      }
      // Redirect to the home page
      res.redirect('/');
    }
  );
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
