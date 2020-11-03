const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const productImages = require("../backend/scrapper/productImages");
const paymentApi = require("../backend/routes/payment");
require("dotenv").config();

const app = express();
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const productsRouter = require("./routes/products");
const usersRouter = require("./routes/user");
const paymentRouter = require("./routes/payment");
// const productImagesRouter = require('./scrapper/productImages')

app.use("/products", productsRouter);
app.use("/user", usersRouter);
app.use("/payment", paymentRouter);
// app.use('/product-imgs', productImagesRouter);

app.use(express.static("public"));

app.use(
  session({
    secret: "loadsofrandomstuff",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

productImages(app);
paymentApi(app);
