const express = require("express");
const app = express();

/*
app.use("/", (req, res, next) => {
   res.send("Welcome to Bloccit")
 });
*/

const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");


appConfig.init(app, express);
routeConfig.init(app);




module.exports = app;