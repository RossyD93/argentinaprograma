const readlineSync = require('readline-sync');
const Numero = readlineSync.question("Ingrese un Numero");

if (Numero < 0){
    console.log("El numero es Negativo"); // Si el número es negativo
}
else if (Numero == 0){
    console.log("El numero es Cero"); //Si el número es cero
}
else if (Numero % 2 === 0 && Numero > 0){
    console.log("El numero es positivo y par"); //Si el número es positivo y par
}
else { console.log("El numero es positivo e impar"); //Si el número es positivo e impar, muestra por consola el mensaje
}

