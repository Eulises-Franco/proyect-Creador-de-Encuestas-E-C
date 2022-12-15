import express  from "express";
import morgan from "morgan";



const app = express ();

//settings
app.set("port", 4000);

//middlewears
app.use(morgan("dev"));

export default app;

/*var name = document.getElementById(nombre);
var correo = document.getElementById(correo);
var pasword = document.getElementById(Contrasena);
var repetir = document.getElementById(repetir);*/
