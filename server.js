const express = require('express')
const app = express()
const hbs=require('hbs')
const port = process.env.PORT || 3000
//Middlewares
app.use( express.static(__dirname + '/public') ) //Un middleware Es un callback que se ejecutara siempre sin necesidad de consultar alguna ruta

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


//To use a different extension (i.e. html) for your template files:
//app.set('view engine', 'html');
//app.engine('html', require('hbs').__express);

//Helpers
require('./hbs/helpers')



//Path's
app.get('/',  (req, res) =>{
    
  res.render('home',{
      nombre:'Anderson'
     }) 
}) 

app.get('/about',  (req, res) =>{
    
  res.render('about')
}) 
//Path's

app.listen(port,()=>{
    console.log(`Listen in Port ${port}`);
})