
const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingrese un numero");

if (numero > 0) {
    console.log("El numero es positivo");
}
else if (numero < 0) { 
    console.log("El numero es negativo"); 
}

else { (numero === 0) 
    console.log("El numero es cero");
}