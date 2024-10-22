import * as rs from "readline-sync"

let longitud: number = rs.questionInt("Ingrese la Dimension del arreglo: ");

let arreglo : number[] = new Array (longitud);

// rellenar arreglo
for (let i : number = 0; i < longitud ; i++ ) {
arreglo[i]= rs.questionInt("Ingrese el numero para el arreglo: ")
}
//invertido
for (let i : number = longitud - 1; i >= 0; i-- ) {
    console.log(arreglo[i])
}

