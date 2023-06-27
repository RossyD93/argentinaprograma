const readlineSync = require('readline-sync');
const numerosecreto = Math.floor(Math.random() *10) + 1;

for ( let i = 0; i <3; i++){
    let numero = Number(readline.question("elige un numero"));

    if numero === numerosecreto){
        console.log("correcto");
        break;
    }
else console.log("ups! creo que este no es :C")
}
console.log("No hay mas intentos";);