const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Configurar sessão
app.use(session({
    secret: 'segredo',
    resave: false,
    saveUninitialized: true
  }));

app.get('/', function(req, res){
    res.render('index.html', {});
});

app.use('/', require('./src/routers/registerRoutes'));
app.use('/', require('./src/routers/logoffRoutes'));
app.use('/', require('./src/routers/loginRoutes'));
app.use('/', require('./src/routers/enterRoutes'));
app.use('/', require('./src/routers/loginCorrentAccountRoutes'));

const port = 8000;

app.listen(port, function(){
    console.log('Servidor rodando na porta ' + port);
});

