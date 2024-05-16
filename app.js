const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

const port = 5000 || process.env.PORT
require('dotenv').config();

app.use(express.urlencoded({extended: true}))
app.use(express.json())


// Définition du répertoire contenant les fichiers statiques
app.use(express.static('public')) //encodage des données envoyé par formulaire

//Template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);


app.listen(port, ()=>{
    console.log('Le port tourne avec succes')
})
