const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/', function (req, res) {
    res.render('home', { title: 'Home' });
})


app.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
})

app.get('/about', function (req, res) {
    res.render('about', { title: 'About Me' });
})

app.get('/projects/2DSideScrollerGame', function (req, res) {
    res.render('2DSideScrollerGame', { title: '2DSideScrollerGame' });
})

app.get('/projects/inProgress', function (req, res) {
    res.render('inProgress', { title: 'In Progress' });
})


app.get('/webproject', function (req, res) {
    res.render('devices',{ title: 'Devices' });
})



//listen for any http request sent to u on server from port 3000.
app.listen(process.env.PORT || 3000, function () {
    console.log('Server started on port 3000');
})
