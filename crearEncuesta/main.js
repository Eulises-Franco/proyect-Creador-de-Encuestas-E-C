//funcion que obtiene las preguntas

//evitar que se borren los formularios
const prevenir=document.getElementById("formulario");

prevenir.addEventListener("submit", function(event){
    event.preventDefault();
})

//funcion que duplica las preguntas
let i = 0;
var Arrayfinal=[];
function aggPregunta(){        
    /*let objetosfinal={
        "preguntas": document.getElementById('pregunta'+i).value,
    }
    encuesta.push(objetosfinal);*/
    i=i+1;
    //var antes=document.getElementById("preguntas");
    /*var nueva=document.getElementById("formulario").innerHTML+=*/
    
    $('#formulario').append('<div id="preguntas'+i+'" class="preguntas"><input type="text" id="pregunta'+i+'" placeholder="Pregunta'+i+'" class="uno" required>'+
            '<button type="button" onclick="aggPregunta()"><i class="fa-solid fa-plus"></i></button>añadir pregunta'+
            '<button type="button" onclick="remove(\'pregunta'+i+'\', \'preguntas'+i+'\')"><i class="fa-solid fa-minus"></i></button>eliminar pregunta'+
        '<div id="respuestas'+i+'" class="respuestas">'+
            '<input type="checkbox" id="radio1" name="opcion0">'+
            '<input type="text" id="respuesta01" placeholder="responder" required><br>'+
            '<input type="checkbox" id="radio2" name="opcion1">'+
            '<input type="text" id="respuesta02" placeholder="responder" required>'+
        
            '<button type="button" id="adresp'+i+'" onclick="addrespuestas('+i+')"><i class="fa-solid fa-plus"></i></button>añadir respuesta'+
            '<button type="button" id="remv" onclick="quitarrespuesta()"><i class="fa-solid fa-minus"></i></button>eliminar respuesta'+
        '</div><br></div>');

    
    console.log(Arrayfinal);
    i++;
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
        //$('# brmolesto').remove();
        i=i-1;
        console.log(i);
        
            
        /*}else{
            alert ("Campo lleno, no se puede eliminar");
        }*/
        
    }

}

//función que añade respuestas
var j=2;
function addrespuestas(id_res){ 
    j++;
    //var compara = document.getElementById("adresp"+i);
        $('#respuestas'+id_res+'').append(
        '<br id=brmolesto'+j+'><input type="checkbox" id="radio'+j+'" name="opcion1'+j+'">'+
        '<input type="text" id="respuesta0'+j+'" placeholder="responder" required>'
        );

}


function quitarrespuesta(){
    if(j==2){
        alert("no puedes tener menos de 2 respuestas");
    }else{
        $('#radio'+j).remove();
        $('#respuesta0'+j).remove();
        $('#brmolesto'+j).remove();
        j=j-1;
}
}


//crear un array
console.log($("input:text").value);
console.log($('form').serializeArray(i))

