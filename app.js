const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

const port = 5000 || process.env.PORT
require('dotenv').config();

app.use(express.urlencoded({extended: true})) //encodage des données envoyé par formulaire
app.use(express.json())


// Définition du répertoire contenant les fichiers statiques
app.use(express.static('public')) 


//Template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main')

app.get('/', function(req, res){

    const locals = {
        title: 'Node js Notes',
        description: 'Free node js Notes App'
    }
    res.render('index', locals)
})

// ROUTERS
app.use('/', require('./server/router/router'))


app.listen(port, ()=>{
    console.log('Le port tourne avec succes')
})
