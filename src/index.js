const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

const port = 3000;

app.get('/', (req, res) => {
    return res.render('home')
})

app.get('/news', (req, res) => {
    return res.render('news')
})

app.get('/search', (req, res) => {
    console.log(req.query) //Get data from query parameter or from client request
    return res.render('search')
})

app.post('/search', (req, res) => {
    console.log(req.body) //Get data from query parameter
    return res.render('search')
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})