let num = 25;
let text = '';

for (let i = 1; i <= num; i++) {
let sqRoot = Math.sqrt(i);
if (Math.floor(sqRoot) !== sqRoot) {
continue;
}

text +=i + ' ';
}
console.log("Los numeros con raices cuadradas son:" + text);