const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
