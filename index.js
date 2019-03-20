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

app.post("/",function(req,res){
  //Recojo los valores que envian desde el Formulario
  console.log(req.body);
  var sexo=(req.body.sexo);
  var apellidoPaterno=(req.body.apadre);
  var apellidoMaterno=(req.body.amadre);

  //Declaro 2 arrays de NOMBRES
  var nombresNene=["Andrés","Julián","Pelayo","Martin","Rodrigo"];
  var nombresNena=["Jimena","Sandra","Andrea","Petra","Lucía"];

  //Escogemos aleatoriamente un nombre
  // 1. Genero un número aleatorio entre 0 y X-1, siendo X
  // el número de nombres total del que dispongo
  // Ese número será la posición en el array de nombres
  // En mi caso sería entre 0 y 4


  var posicion=Math.round(Math.random()*(nombresNene.length-1));
  console.log(posicion);

  //Comprobamos si es niño o niña y respondemos con un nombre
  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
  if (sexo==="1"){
    //Es niño
    res.write("<h1>Enhorabuena!!</h1>");
    res.write("<h2>Puedes llamarle "+nombresNene[posicion]+" "+apellidoPaterno+" "+apellidoMaterno+"</h2>");
    res.send();
  }
});

//Arranca el servidor
app.listen(3000,function(){
  console.log("Servidor escuchando en puerto 3000.");
});
