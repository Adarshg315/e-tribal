require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/user");
const port = process.env.PORT || 5050;

const connectDB = require("./config/db");
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use("/products", productsRouter);
app.use("/user", usersRouter);
app.use(express.static("public"));
app.use(
	session({
		secret: "loadsofrandomstuff",
		resave: false,
		saveUninitialized: true,
	})
);

app.get("/logout", (req, res) => {
	req.session.destroy();
	res.redirect("/");
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
