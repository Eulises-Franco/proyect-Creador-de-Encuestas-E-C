//funcion que obtiene las preguntas
function pregunta() {
    var question= document.getElementById("pregunta1").value;
    var respuesta01=document.getElementById("respuesta01").value;
    var respuesta02=document.getElementById("respuesta02").value;
    console.log(question);
}
//evitar que se borren los formularios
const prevenir=document.getElementById("formulario");

prevenir.addEventListener("submit", function(event){
    event.preventDefault();
})

//funcion que duplica las preguntas
let i = 0;
function aggPregunta(){
    i=i+1;
    //var antes=document.getElementById("preguntas");
    var nueva=document.getElementById("formulario").innerHTML+='<div id="preguntas'+i+'"><input type="text" id="pregunta" placeholder="Pregunta'+i+'" required>'+
            '<button type="button" onclick="aggPregunta()">+</button>añadir pregunta'+
            '<button type="button" onclick="remove()">-</button>eliminar pregunta'+
        '<div id="respuestas">'+
            '<input type="radio" id="radio1">'+
            '<input type="text" id="respuesta01" placeholder="responder" required>'+

            '<input type="radio" id="radio2">'+
            '<input type="text" id="respuesta02" placeholder="responder" required>'+
        
            '<button type="button">+</button>añadir respuesta'+
            '<button type="button">-</button>eleminiar respuesta'+
        '</div> <br></br></div>';
        return(i);
}

var h=console.log(aggPregunta)
//funcion que quita una pregunta
function remove(){
    if(i==0){
        alert("no puedes eliminar todas las preguntas")
    }else{
        //var 
        var id="preguntas"+i;
        let fuera= document.getElementById(id);
        fuera.remove();
        i=i-1;
    }

}

//función que añade respuestas
j=2
function addrespuetas(){
    
}