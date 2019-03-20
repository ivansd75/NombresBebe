//jshint esversion:6

//Inicializo express
const express=require('express');
const app=express();

//Inicializo body-parser
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//Activo carpeta public para archivos estaticos
app.use(express.static('public'));

//Sección de rutas
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

//Arranca el servidor
app.listen(3000,function(){
  console.log("Servidor escuchando en puerto 3000.");
});
