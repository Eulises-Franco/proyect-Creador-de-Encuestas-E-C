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
    /*var nueva=document.getElementById("formulario").innerHTML+=*/
    
    $('#formulario').append('<div id="preguntas'+i+'"><input type="text" id="pregunta'+i+'" placeholder="Pregunta'+i+'" required>'+
            '<button type="button" onclick="aggPregunta()"><i class="fa-solid fa-plus"></i></button>añadir pregunta'+
            '<button type="button" onclick="remove(\'pregunta'+i+'\', \'preguntas'+i+'\')"><i class="fa-solid fa-minus"></i></button>eliminar pregunta'+
        '<div id="respuestas'+i+'">'+
            '<input type="radio" id="radio1">'+
            '<input type="text" id="respuesta01" placeholder="responder" required><br>'+

            '<input type="radio" id="radio2">'+
            '<input type="text" id="respuesta02" placeholder="responder" required>'+
        
            '<button type="button" id="adresp'+i+'" onclick="addrespuestas('+i+')"><i class="fa-solid fa-plus"></i></button>añadir respuesta'+
            '<button type="button"><i class="fa-solid fa-minus"></i></button>eliminar respuesta'+
        '</div><br></div><br>');
     
    console.log(i);
    return(i);
}
        

var h=console.log(aggPregunta)


//muestra el cambio en el campo
/*var id="preguntas"+i;
$('#'+id).change(function(){
    var valor_campo = $('#'+id).val();
    console.log(valor_campo);
    alert (valor_campo);
});*/

//funcion que quita una pregunta
function remove(id_pregunta, id_div){
    //console.log(id);
    if(i==0){
        alert("no puedes eliminar todas las preguntas")
    }else{
        //var 
        //var id="preguntas"+i;
        var valor_campo = $('#'+id_pregunta).val();
        //console.log(valor_campo);
        //if (valor_campo === ""){
            //let fuera= document.getElementById(id);
        $('#'+id_div).remove();
        i=i-1;
        console.log(i);
        
            
        /*}else{
            alert ("Campo lleno, no se puede eliminar");
        }*/
        
    }

}

//función que añade respuestas
j=2
function addrespuestas(id_res){ 
    j++;
    //var compara = document.getElementById("adresp"+i);
        $('#respuestas'+id_res+'').append(
        '<br><input type="radio" id="radio'+j+'">'+
        '<input type="text" id="respuesta0'+j+'" placeholder="responder" required>'
        );

}