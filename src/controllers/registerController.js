function registerView(req, res) {
    const pessoa = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        cpfOrRg: req.body.cpfOrRg,
        birthday: req.body.birthday,
        password: req.body.password,
        monthlyIncome: req.body.monthlyIncome,
        gridCheck: req.body.gridCheck
    }
    res.render('register.html', {pessoa});
};

module.exports = {
    registerView,
}