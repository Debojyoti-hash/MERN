const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/connect");

const port = process.env.PORT || 3000;

//const static_path = path.join(__dirname, "../views");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.static(template_path))

app.set("view engine", "hbs");
hbs.registerPartials(partial_path);
app.set("views", template_path);

app.get("/",(req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})

