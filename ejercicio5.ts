import * as rs from "readline-sync"

let longitud: number = rs.questionInt("Ingrese longitus del arreglo: ");
let negativo: number = 0;
let positivo: number = 0;
let ceros: number = 0;

let arregloNumeros: number[] = new Array(longitud);

// se pide el numero

for (let i: number = 0; i < longitud; i++) {
    arregloNumeros[i] = rs.questionInt("Ingrese numero para el arreglo: ")

    //evalua y deacuerdo a el numero es donde entra

    if (arregloNumeros[i] > 0) {
        positivo++ // igual a positivo = positivo +1
    } else if (arregloNumeros[i] < 0) {
        negativo++
    } else {
        ceros++
    }

}
console.log(`hay ${positivo} positivo, ${negativo} negativo, ${ceros} ceros `);
