const mongoose = require('mongoose')

// URL de connexion à MongoDB provenant de .env

mongoose.connect('mongodb+srv://Dan:DanDan@cluster0.vqa8wp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connecté avec succes à la base de données')
})
.catch((error)=>{
    console.log('erreur de connexion à la base de données ' +error)
})

