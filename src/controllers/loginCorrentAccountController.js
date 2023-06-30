function showInformationsAboutCorrentAccount(req, res) {
    const checkingAccount = {
        bank: req.body.bank,
        agency: req.body.agency,
        agencyDigit: req.body.agencyDigit,
        checkingAccount: req.body.checkingAccount,
        checkingAccountDigit: req.body.checkingAccountDigit,
        accountOwner: req.body.accountOwner
    }
    res.render('loginCorrentAccount.html', {message: `Olá, ${checkingAccount.accountOwner}. Estou feliz de tê-lo(a) conosco!`});
};

module.exports = {
    showInformationsAboutCorrentAccount,
}