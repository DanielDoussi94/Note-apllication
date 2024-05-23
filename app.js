const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')
const db = require('./server/config/db') //cHEMIN CONNEXION AU BD
const port = 5000 || process.env.PORT
require('dotenv').config();

//SESSION
app.use(session(
    {
      store: MongoStore.create({
        mongoUrl: 'mongodb+srv://Dan:DanDan@cluster0.vqa8wp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
      }),
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
    }
  ));

app.use(express.urlencoded({extended: true})) //encodage des données envoyé par formulaire
app.use(express.json())


// Définition du répertoire contenant les fichiers statiques
app.use(express.static('public')) 

//Initialisation du passport
app.use(passport.initialize());
app.use(passport.session());


//Template engine
app.use(expressLayouts);
app.set('layout', 'layouts/main')
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    const locals = {
        title: 'Node js Notes',
        description: 'Free node js Notes App'
    }
    res.render('index', locals)
})


// ROUTERS
app.use('/', require('./server/router/auth'))
app.use('/', require('./server/router/Mainrouter'))
app.use('/', require('./server/router/dashboardR'))

app.get('*', function(req, res){
    res.status(404).render('404')
})


app.listen(port, ()=>{
    console.log('Le port tourne avec succes')
})
