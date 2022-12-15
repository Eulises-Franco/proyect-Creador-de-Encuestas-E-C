let filas = [];

function addRow() {
    let nuevaFila = {
        id: 0,
        concepto: "",
        precio: 0,
        cantidad: 1,
        iva: 21,
        irpf: 15
    };

    nuevaFila.id = filas.length;

    filas.push(nuevaFila);

    let elemtoRepetir = `<div class="row mt-3">
    <div class="col-5">
        <textarea class="form-control" id="exampleFromControlTextarea1"></textarea>
    </div>
    <div class="col-2">
        <input id="precio`+ nuevaFila.id + `" class="form-control" type="number" value="` + nuevaFila.cantidad + `">
    </div>
    <div class="col">
        <input id="cant`+ nuevaFila.id + `" class="form-control" type="number" value="0">
    </div>
    <div class="col">
        <input id="IVA`+ nuevaFila.id + `" class="form-control" type="number" value="` + nuevaFila.iva + `">
    </div>
    <div class="col">
        <input id="IRPF`+ nuevaFila.id + `" class="form-control" type="number" value="` + nuevaFila.irpf + `">
    </div>`;


    document.getElementById("contenido").innerHTML += elemtoRepetir;
}
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

function calcularIVA(total, iva) {
    return total * (iva / 100);
}

function calcularIRPF(total, irpf) {
    return -(total * (irpf / 100));
}

function calcularTodo() {
    filas.forEach((fila, pos) => {
        let idPrecio = "precio" + pos;
        let precio = document.getElementById(idPrecio).value;

        let idCant = "cant" + pos;
        let Cantidad = document.getElementById(idCant).value;

        let total = calcularTotal(precio, Cantidad);
        console.log("El total es: " + total);

        let idIVA = "IVA" + pos;
        let iva = document.getElementById(idIVA).value;

        let resultIVA = calcularIVA(total, iva);

        let idIRPF = "IRPF" + pos;
        let irpf = document.getElementById(idIRPF).value;

        let resultadoIRPF = calcularIRPF(total, irpf);

        totalBase += total;
        totalIVA += resultIVA;
        total += resultadoIRPF;
    });

    document.getElementById("totalBase").innerHTML = totalBase + " €";
    document.getElementById("totalIVA").innerHTML = totalIVA + " €";
    document.getElementById("totalIRPF").innerHTML = totaIRPF + " €";
    document.getElementById("totalCalculado").innerHTML = totalCalculado + " €";
}