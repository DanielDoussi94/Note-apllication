// Gestion de la homePage
exports.homepage = async (req, res) =>{
    const locals = {
        title: 'Node js Notes',
        description: 'Free node js Notes App'
    }
    res.render('index', { locals, layout: '../views/layout/front' });

}

// Gestion de la homePage

exports.about = async (req, res) =>{
    const locals = {
        title: 'Node js Notes',
        description: 'Free node js Notes App'
    }
    res.render('about', locals)
}

