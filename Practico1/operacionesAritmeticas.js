//A.Crea cuatro variables que contengan valores numéricos.
let var1 = 5;
let var2 = 6;
let var3 = 2;
let var4 = 6;
//B. Suma las dos primeras variables y guarda el resultado en otra variable.
let suma = var1 + var2; //* suma
console.log (suma);

//C. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
let resta = var4 - var3; //*resta
console.log(resta);
//D. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada resultadoFinal.

let resultadoFinal = suma * resta; 
console.log(resultadoFinal);
//E. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar.

function EsPar(resultadoFinal){

if (resultadoFinal % 2 === 0){ 
return "EsPar";
 }
}

console.log(EsPar); 

console.log("Mis variables iniciales fueron:"+ " " + var1, + " " +  var2, + " "+ var3,+ " " +var4 + " " + "La espuesta a verificar si el resultado final es par es: esPar") ;




