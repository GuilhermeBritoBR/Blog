const express = require('express');
const app = express();
const session = require('express-session');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
port = 8000;
//todos atribuidos para o funcionamento total do servidor 

//agora vou criar o server através da porta 8000
app.listen(port);
//vou introduzir o carregamento de ejs
app.set('view engine', 'ejs');
app.set('views', 'views');
//carregando arquivos estaticos
app.use('/static', express.static('public'));
app.use(express.static('public'));
//a primeira rota deve ser introduzida
app.get('/', (req, res)=>{
    res.render('pages/index');
});

//rotas principais
//calculadora de pace, a função desenvolvida 
app.get('/calculadora', (req, res)=>{
    res.render('pages/calculadora');
});
//sobre mim
app.get('/sobre', (req, res)=>{
    res.render('pages/sobre');
});
//galeria
app.get('/galeria', (req, res)=>{
    res.render('pages/galeria');
});
//rede
app.get('/rede', (req, res)=>{
    res.render('pages/rede');
});

///scripts para o funcionamento da administração

//////

///scripts para validação

////


