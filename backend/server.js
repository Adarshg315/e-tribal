const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

var multer = require('multer');

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

// app.use(
//   multer({
//     dest: './uploads/',
//     rename: function (fieldname, filename) {
//       return filename;
//     },
//   })
// );

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
