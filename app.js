const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const session = require("express-session");
const i18n = require("i18n");
i18n.configure({
    locales: ["et"],
    defaultLocale: "et",
    cookie: "locale",
    directory: __dirname + '/locales'
});

const indexRouter = require("./routes/index");
const blogRouter = require("./routes/blog");
const adminRouter = require("./routes/admin");

// Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/mits";
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
mongoose.set("useCreateIndex", true); // avoid deprecation warning

const app = express();

// view engine setup
const hbs = require("hbs");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: "mits mitte?",
    resave: true,
    saveUninitialized: false
}));
app.use(i18n.init);


app.use("/", indexRouter);
app.use("/blogi", blogRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});


module.exports = app;