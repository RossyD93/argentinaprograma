let cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called: ';
for (let i = 0; i < cats.length; i++) {
if (i === cats.length - 1) {
info = info.slice(0, info.length - 2) // en este ejemplo, usamos slice para cortar la coma al final del and
info += ' and ' + cats[i] + '.';
} else {
info += cats[i] + ', ';
}
}
console.log(info);