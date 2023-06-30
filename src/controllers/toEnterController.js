function toEnterView(req, res){
    res.render('toEnter.html', {message: `Seja bem vindo(a), `});
};

module.exports = {
    toEnterView,
}