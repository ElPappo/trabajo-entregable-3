import * as rs from "readline-sync"

export const cargarArreglo = (nombreArr : number[], long : number): void => {

    console.log("Ingrese el numero para el arreglo 1: ")

for(let i: number = 0; i < long; i++) {
    nombreArr[i] = rs.questionInt(`Elemento ${i+1}: `);

}
}
