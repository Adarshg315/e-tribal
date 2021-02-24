require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("passport");
// const session = require("express-session");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/user");
const port = process.env.PORT || 5050;
var GoogleStrategy = require("passport-google-oauth2").Strategy;
const GOOGLE_CLIENT_ID =
	"623394201269 - t181gs5as9ve3skt64idhhsoefmb0b2l.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "OuAGntWGCu6l6UUlZLsw6TT1";
passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:3000/auth/google/callback",
			passReqToCallback: true,
		},
		function (request, accessToken, refreshToken, profile, done) {
			User.findOrCreate({ googleId: profile.id }, function (err, user) {
				return done(err, user);
			});
		}
	)
);
const connectDB = require("./config/db");
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use("/products", productsRouter);
app.use("/user", usersRouter);
app.use(express.static("public"));
// app.use(
// 	session({
// 		secret: "loadsofrandomstuff",
// 		resave: false,
// 		saveUninitialized: true,
// 	})
// );

// app.get("/logout", (req, res) => {
// 	req.session.destroy();
// 	res.redirect("/");
// });

// app.get(
// 	"/auth/google",
// 	passport.authenticate("google", { scope: ["email", "profile"] })
// );

// app.get(
// 	"/auth/google/callback",
// 	passport.authenticate("google", {
// 		successRedirect: "/auth/google/success",
// 		failureRedirect: "/auth/google/failure",
// 	})
// );

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
