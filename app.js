require('dotenv').config()
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT

//require hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico
app.use( express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Lucio Berté',
        titulo: 'Curso de Node - Express'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Lucio Berté',
        titulo: 'Curso de Node - Express'
    })
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Lucio Berté',
        titulo: 'Curso de Node - Express'
    })
})
app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })