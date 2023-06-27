let n = 10;
let fibo = [0,1];
let sumafibo = 1;
for (let i =2; i < n; i++){
sumafibo = fibo[0] + fibo[1];
}
console.log(sumafibo);