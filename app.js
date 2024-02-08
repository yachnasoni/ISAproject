const express = require('express');
const app = express();
const path = require('path');
app.use('/css',express.static('css'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// const hbs= require('hbs');
// require('./db/conn');
const port = process.env.PORT || 3000;

// const static_path = path.join(__dirname, '../public');
// const template_path= ../templates/views')
// const partial_path= 
// path.join(__dirname,'../templates/partials');
// app.use(express.static(static_path));

// app.set('view engine', 'hbs');
// app.use('views',template_path);
// hbs.registerPartials(partial_path);
app.use(express.static(path.join(__dirname,'/public')));
app.use('/img', express.static('img'));
// app.use(express.static(path.join(__dirname,'router')));
// app.use('/',require(path.join(__dirname,'../route.blogs')));

app.get('/',(req,res)=>{
   res.render('home');
});

app.get('/aboutus',(req,res)=>{
   res. render( 'aboutus' );
});

app.get('/mentor',(req,res)=>{
   res. render('mentor' );
});

app.get('/studentwork',(req,res)=>{
   res. render('studentwork');
});

app.get('/ourstudent',(req,res)=>{
   res. render('ourstudent' );
});

app.get('/teacmethodology',(req,res)=>{
   res. render('teacmethodology');
});



app.get('/registrationform',(req,res)=>{
   res. render('registrationform' );
});



app.get('/cmpbasic',(req,res)=>{
   res. render('cmpbasic' );
});




app.get('/digital',(req,res)=>{
   res. render('digital' );
});



app.get('/graphic',(req,res)=>{
   res. render('graphic');
});



app.get('/website',(req,res)=>{
   res. render('website' );
});



app.get('/gap',(req,res)=>{
   res. render('gap' );
});

app.get('/workshop',(req,res)=>{
   res. render('workshop' );
});

app.use('/', (req, res) =>{
   res.status(404);
   res.send(`<h1>Error 404: Resource not found</h1>`)
});

app.listen(port , () =>{
console.log(`listening on port no ${port}`);
})