var i=0;
function Menu(){
    
    if (i==0 ){
        document.getElementById("lista").style.display ="block";
        i=1
    }
    else {
        document.getElementById("lista").style.display = "none";
        i=0
    }

}
