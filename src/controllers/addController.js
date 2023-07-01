function addAmount(req, res) {
    let initialAmount = 0
    let amount = parseFloat(req.body.amount);
    initialAmount += amount;
    res.render('add.html', {message: `Seu saldo é de R$${amount}`});
}

module.exports = {
    addAmount,
}